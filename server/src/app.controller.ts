import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {
	}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	@Get('events')
	getEvents() {
		return {
			upcomingEvents: [
				{
					name: "Квиз по случаю дня рождения департамента",
					date: "22.10.22"
				},
				{
					name: "Совместный поход на пейнтбол",
					date: "25.10.22"
				}
			],
			events: [
				{
					name: "Квиз по случаю дня рождения департамента",
					date: "22.10.22"
				},
				{
					name: "Совместный поход на пейнтбол",
					date: "25.10.22"
				},
				{
					name: "Баня на пароме",
					date: "27.10.22"
				},
				{
					name: "Квиз 18+",
					date: "15.11.22"
				},
				{
					name: "Прятки в темноте",
					date: "19.11.22"
				},
				{
					name: "Поход в Бар 100 рентген",
					date: "24.11.22"
				}
			]
		}
	}
}
