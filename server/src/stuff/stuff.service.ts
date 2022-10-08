import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stuff } from './models/stuff.model';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { ConfigService } from '@nestjs/config';
import * as FormData from 'form-data';
import { FileElementResponse } from '../file/file-element.response';


const axios = require('axios');


@Injectable()
export class StuffService {
	constructor(
		@InjectModel(Stuff.name) private readonly stuffModel: Model<Stuff>
	) {
	}

	async create(file: Express.Multer.File, {title, description, cost, count}: CreateStuffDto): Promise<Stuff> {
		const oldStuff = await this.findByTitle(title);
		if (oldStuff) {
			throw new BadRequestException('Stuff already exist');
		}

		const formData = new FormData();
		formData.append('file', Buffer.from(file.buffer), file.originalname);
		formData.append('title', title);
		const fileSystemResponse: FileElementResponse = await axios.post(
			`http://127.0.0.1:5050/stuff`,
			formData,
			{headers: formData.getHeaders()})
			.then(res => res.data);

		const stuff = new this.stuffModel({
			title,
			description,
			cost,
			count,
			picture: fileSystemResponse.url
		});
		return await stuff.save();
	}

	async findAll(): Promise<Stuff[]> {
		return await this.stuffModel.find({}).exec();
	}

	async findById(id: string): Promise<Stuff> {
		return await this.stuffModel.findById(id).exec();
	}

	async findByTitle(title: string): Promise<Stuff> {
		return await this.stuffModel.findOne({title}).exec();
	}
}
