import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { RolesEnum } from '../../auth/roles.enum';
import { ApiProperty } from '@nestjs/swagger';

export class UserRolesParamsDto {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Users ID',
    required: true,
  })
  id: string;

  @IsEnum(RolesEnum)
  @IsNotEmpty()
  @ApiProperty({
    enum: RolesEnum,
    description: 'Users new role',
    required: true,
    default: RolesEnum.user,
  })
  role: RolesEnum = RolesEnum.user;
}
