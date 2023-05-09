import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserLoginDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    type: String,
    description: 'Users email',
    example: 'johndoe@gmail.com',
    required: true,
  })
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty({
    type: String,
    description: 'Users password',
    example: 'fasgango',
    required: true,
  })
  password: string;
}

export class UserRegisterDto extends UserLoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Users first and last name',
    example: 'John Doe',
    required: true,
  })
  name: string;
}

export class UserResponseDto extends UserRegisterDto {
  @ApiProperty({
    type: String,
    description: 'Users id',
  })
  id: string;

  @ApiProperty({
    type: Date,
  })
  createdAt!: Date;

  @ApiProperty({
    type: Date,
  })
  updatedAt!: Date;

  @ApiProperty({
    type: Date,
  })
  deletedAt?: Date;
}
