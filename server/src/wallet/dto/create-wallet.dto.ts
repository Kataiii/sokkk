import { IsNotEmpty, IsString } from 'class-validator';


export class CreateWalletDto {
	@IsString()
	@IsNotEmpty()
	privateKey: string;

	@IsString()
	@IsNotEmpty()
	publicKey: string;

	@IsString()
	@IsNotEmpty()
	userId: string;
}