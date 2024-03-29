import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserRegisterDto, UserResponseDto } from '../auth/dtos/auth.dto';
import { RolesEnum } from '../auth/roles.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  getUserById(id: string) {
    return this.userRepository.findOneByOrFail({ id });
  }

  async getUserByUsername(username: string): Promise<UserResponseDto> {
    const user = await this.userRepository.findOneBy({ username });

    if (!user) {
      throw new NotFoundException(
        `User with username: ${username} is not found`,
      );
    }

    return user;
  }

  createUser(user: UserRegisterDto): Promise<UserResponseDto> {
    return this.userRepository.save(user);
  }

  async updateUserRole(id: string, role: RolesEnum) {
    const user = await this.getUserById(id);

    user.role = role;

    await this.userRepository.save(user);
  }
}
