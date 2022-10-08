import { Module } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { StuffController } from './stuff.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { path } from 'app-root-path';


@Module({
	controllers: [StuffController],
	imports: [
		ServeStaticModule.forRoot({
			rootPath: `${path}/uploads`,
			serveRoot: '/uploads'
		})
	],
	providers: [StuffService]
})
export class StuffModule {
}
