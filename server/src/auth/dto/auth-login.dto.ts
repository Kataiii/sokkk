import { IsEmail, IsString } from 'class-validator';


export class AuthLoginDto {
	@IsString()
	username: string;

	@IsString()
	password: string;

	@IsString()
	@IsEmail()
	email: string;
}