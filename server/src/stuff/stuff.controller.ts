import { Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateStuffDto } from './dto/create-stuff.dto';


@Controller('stuff')
export class StuffController {
	constructor(private readonly stuffService: StuffService) {
	}

	@Post()
	@UseGuards(JwtAuthGuard)
	@UseInterceptors(FileInterceptor('file'))
	async create(
		@UploadedFile() file: Express.Multer.File,
		@Body() dto: CreateStuffDto
	) {
		return await this.stuffService.create(file, dto);
	}
}
