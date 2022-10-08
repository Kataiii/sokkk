import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { getJwtConfig } from '../configs/jwt.config';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../user/models/user.model';
import { JwtStrategy } from './strategies/jwt.strategy';
import { WalletModule } from '../wallet/wallet.module';
import { ApiModule } from '../api/api.module';


@Module({
	imports: [
		MongooseModule.forFeature([
			{name: User.name, schema: UserSchema}
		]),
		JwtModule.registerAsync(getJwtConfig()),
		ConfigModule,
		PassportModule,
		WalletModule,
		ApiModule
	],
	controllers: [AuthController],
	providers: [AuthService, JwtStrategy]
})
export class AuthModule {
}
