import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Team } from '../interfaces/team.interface';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TeamCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: 'The name of the team',
    example: 'Real Madrid',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: 'The location of the team',
    example: 'Spain',
  })
  location: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: 'The League of the team',
    example: 'La Liga',
  })
  league: string;
}

export class TeamResponseDto extends TeamCreateDto implements Team {
  @IsUUID()
  @IsNotEmpty()
  @ApiPropertyOptional({
    required: true,
    type: String,
    description: 'The id of the the team',
    example: '25e10491-fa71-4b9c-9d74-27399eb42069 ',
  })
  id: string;
}
