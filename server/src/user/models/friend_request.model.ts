import { Prop, Schema } from '@nestjs/mongoose';
import { User } from './user.model';
import mongoose from 'mongoose';


export enum FriendRequestStatus {
	Send = 'Send',
	Accepted = 'Accepted',
}

@Schema()
export class FriendRequest {
	@Prop({required: true, enum: FriendRequestStatus, type: String})
	status: FriendRequestStatus;

	@Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
	user_sender: User;

	@Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
	user_receiver: User;
}