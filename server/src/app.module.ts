import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from './configs/mongo.config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync(getMongoConfig()),
    AuthModule,
    UserModule,
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
