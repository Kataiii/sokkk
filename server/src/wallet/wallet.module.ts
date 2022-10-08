import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { getJwtConfig } from '../configs/jwt.config';
import { ConfigModule } from '@nestjs/config';
import { Wallet, WalletSchema } from './models/wallet.model';
import { UserModule } from '../user/user.module';


@Module({
	imports: [
		MongooseModule.forFeature([
			{name: Wallet.name, schema: WalletSchema}
		]),
		JwtModule.registerAsync(getJwtConfig()),
		ConfigModule,
		UserModule
	],
	controllers: [WalletController],
	providers: [WalletService],
	exports: [WalletService]
})
export class WalletModule {
}
