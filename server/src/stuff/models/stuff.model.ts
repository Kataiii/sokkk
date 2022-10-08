import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class Stuff {
	@Prop({required: true})
	title: string;

	@Prop()
	description?: string;

	@Prop({required: true})
	cost: number;

	@Prop({required: true})
	count: number;

	@Prop()
	picture?: string;
}

export const StuffSchema = SchemaFactory.createForClass(Stuff);