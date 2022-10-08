import { Prop, Schema } from '@nestjs/mongoose';
import { User } from '../../user/models/user.model';
import { Stuff } from './stuff.model';
import mongoose from 'mongoose';


export enum OrderStatus {
	Pending = 'Pending',
	Delivered = 'Delivered'
}

@Schema()
export class Order {
	@Prop({required: true, enum: OrderStatus, type: String})
	status: OrderStatus;

	@Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
	user: User;

	@Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Stuff'})
	stuff: Stuff;
}