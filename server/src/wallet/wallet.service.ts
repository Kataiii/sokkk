import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wallet } from './models/wallet.model';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UserService } from '../user/user.service';


@Injectable()
export class WalletService {
	constructor(
		@InjectModel(Wallet.name) private readonly walletModel: Model<Wallet>,
		private readonly userService: UserService
	) {
	}

	async create({userId, publicKey, privateKey}: CreateWalletDto) {
		const user = await this.userService.findById(userId);
		if (!user) {
			throw new BadRequestException('wrong user id');
		}

		const wallet = new this.walletModel({
			privateKey,
			publicKey,
			user: user.id
		});
		return wallet.save();
	}
}
