import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from './configs/mongo.config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { WalletModule } from './wallet/wallet.module';
import { StuffModule } from './stuff/stuff.module';


@Module({
	imports: [
		ConfigModule.forRoot(),
		MongooseModule.forRootAsync(getMongoConfig()),
		AuthModule,
		UserModule,
		WalletModule,
		StuffModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {
}
