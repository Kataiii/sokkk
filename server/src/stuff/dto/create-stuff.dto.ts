import { IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class CreateStuffDto {
	@IsString()
	@IsNotEmpty()
	title: string;

	@IsString()
	@IsNotEmpty()
	description: string;

	@IsNumber()
	@IsNotEmpty()
	cost: number;

	@IsNumber()
	@IsNotEmpty()
	count: number;
}