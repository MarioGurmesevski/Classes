/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, UnauthorizedException } from '@nestjs/common';
import {
  LoginResponseDto,
  UserLoginDto,
  UserRegisterDto,
  UserResponseDto,
} from './dtos/auth.dto';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { SALT_ROUNDS } from './auth.const';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(body: UserRegisterDto): Promise<UserResponseDto> {
    const hashedPassword = await bcrypt.hash(body.password, SALT_ROUNDS);

    const userResponse = await this.userService.createUser({
      ...body,
      password: hashedPassword,
    });
    return userResponse;
  }

  async login(credentials: UserLoginDto): Promise<LoginResponseDto> {
    const accessToken = this.jwtService.sign(user);

    return { user, accessToken };
  }

  async validateUser(
    username: string,
    password: string,
  ): Promise<UserResponseDto> {
    const user = await this.userService.getUserByUsername(credentials.username);

    const isPasswordValid = await bcrypt.compare(
      credentials.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException(`Invalid credentials`);
    }
  }
}
