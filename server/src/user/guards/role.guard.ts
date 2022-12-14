import { CanActivate, ExecutionContext, Injectable, SetMetadata } from '@nestjs/common';
import { UserRole } from '../models/user.model';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

export const Role = (role: UserRole) => SetMetadata('role', role);

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRole: string = this.reflector.getAllAndOverride<string>('role', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRole) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    const [_, token]: [string, string] = authHeader.split(' ');

    const userJwt = this.jwtService.verify(token, this.configService.get('JWT_SECRET'));
    const user = this.userService.findById(userJwt.id);

    return user.then(u => u.role === requiredRole);
  }
}