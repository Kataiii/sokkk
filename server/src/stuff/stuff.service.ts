import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stuff } from './models/stuff.model';
import { CreateStuffDto } from './dto/create-stuff.dto';


@Injectable()
export class StuffService {
	constructor(
		@InjectModel(Stuff.name) private readonly stuffModel: Model<Stuff>
	) {
	}

	async create(file: Express.Multer.File, {title, description, cost, count}: CreateStuffDto) {
		const oldStuff = await this.findByTitle(title);
		if (oldStuff) {
			throw new BadRequestException('Stuff already exist');
		}


	}

	async findByTitle(title: string): Promise<Stuff> {
		return await this.stuffModel.findOne({title}).exec();
	}
}
