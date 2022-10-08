import { BadRequestException, Body, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { compare, genSalt, hash } from 'bcryptjs';
import { User, UserRole } from '../user/models/user.model';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { AuthErrorMessages } from './auth.constants';


@Injectable()
export class AuthService {
	constructor(
		@InjectModel(User.name) private readonly userModel: Model<User>,
		private readonly jwtService: JwtService
	) {
	}

	async register(@Body() {email, username, password, role = UserRole.User}: AuthRegisterDto): Promise<User> {
		const oldUser = await this.findUserByEmail(email);
		if (oldUser) {
			throw new BadRequestException(AuthErrorMessages.AlreadyExist);
		}

		const salt = await genSalt(10);
		const passwordHash = await hash(password, salt);

		const user = new this.userModel({username, email, passwordHash, role});
		return user.save();
	}

	async login(id: string): Promise<{ access_token: string }> {
		return {
			access_token: await this.jwtService.signAsync({id})
		};
	}

	async findUserByEmail(email: string): Promise<User> {
		return await this.userModel.findOne({email}).exec();
	}

	async validateUser(phone: string, password: string): Promise<Pick<User, 'id'>> {
		const user = await this.findUserByEmail(phone);
		if (!user) {
			throw new NotFoundException(AuthErrorMessages.WrongData);
		}

		const isPasswordCorrect = await compare(password, user.passwordHash);
		if (!isPasswordCorrect) {
			throw new NotFoundException(AuthErrorMessages.WrongData);
		}

		return {id: user.id};
	}
}
