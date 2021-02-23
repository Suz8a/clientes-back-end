import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(user: { username: string; password: string }) {
    const userInfo = await this.usersService.findOne(user.username);
    if (!userInfo) throw new UnauthorizedException();

    const payload = { username: userInfo.username, sub: userInfo.userId };

    if (userInfo.password !== user.password) throw new UnauthorizedException();

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
