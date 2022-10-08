import { Body, Controller, Get, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { IdValidationPipe } from '../pipes/id-validation.pipe';


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

	@Get()
	@UseGuards(JwtAuthGuard)
	async findAll() {
		return await this.stuffService.findAll();
	}

	@Get(':id')
	@UseGuards(JwtAuthGuard)
	async findById(@Param('id', IdValidationPipe) id: string) {
		return await this.stuffService.findById(id);
	}
}
