import { Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileElementResponse } from '../files/file-element.response';
import { MFile } from '../files/mfile.class';
import { StuffInfoDto } from './dto/stuff-info.dto';
import { Response } from 'express';


@Controller('stuff')
export class StuffController {
	constructor(private readonly stuffService: StuffService) {
	}

	@Post()
	@UseInterceptors(FileInterceptor('file'))
	async uploadTrackImage(@UploadedFile() file: Express.Multer.File, @Body() {title}: StuffInfoDto): Promise<FileElementResponse> {
		const buffer = await this.stuffService.convertToWebP(file.buffer);

		if (file.mimetype.includes('image')) {
			const saveFile: MFile = (new MFile({
				originalname: `${file.originalname.split('.')[0]}.webp`,
				buffer
			}));

			return this.stuffService.saveStuffFile(saveFile, title);
		}
	}

	@Get(':title')
	async getTrackImage(
		@Res() res: Response,
		@Param('title') title: string) {

		return this.stuffService.sendStuffFile(res, title);
	}
}
