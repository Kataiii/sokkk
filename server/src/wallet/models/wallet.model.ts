import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../../user/models/user.model';


@Schema()
export class Wallet extends Document {
	@Prop({required: true})
	privateKey: string;

	@Prop({required: true})
	publicKey: string;

	@Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
	user: User;
}

export const UserSchema = SchemaFactory.createForClass(Wallet);