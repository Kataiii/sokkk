import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Wallet } from '../../wallet/models/wallet.model';


export enum UserRole {
	User = 'User',
	Admin = 'Admin'
}

@Schema()
export class User extends Document {
	@Prop({required: true})
	username: string;

	@Prop({required: true})
	passwordHash: string;

	@Prop({required: true})
	email: string;

	@Prop({required: true, enum: UserRole, type: String})
	role: UserRole;

	@Prop()
	imageUrl?: string;

	@Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Wallet'})
	wallet: Wallet;
}

export const UserSchema = SchemaFactory.createForClass(User);