import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Team } from '../interfaces/team.interface';
import { ApiProperty } from '@nestjs/swagger';

export class TeamCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
  })
  location: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
  })
  league: string;
}

export class TeamResponseDto extends TeamCreateDto implements Team {
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
