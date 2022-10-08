import { Module } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { StuffController } from './stuff.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { getJwtConfig } from '../configs/jwt.config';
import { Stuff, StuffSchema } from './models/stuff.model';
import { ConfigModule } from '@nestjs/config';


@Module({
	imports: [
		MongooseModule.forFeature([
			{name: Stuff.name, schema: StuffSchema}
		]),
		JwtModule.registerAsync(getJwtConfig()),
		ConfigModule
	],
	controllers: [StuffController],
	providers: [StuffService]
})
export class StuffModule {
}
