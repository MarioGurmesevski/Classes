import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';
import { Player } from '../interfaces/player.interface';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PlayerCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: 'The name of the player',
    example: 'Tom',
  })
  name: string;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    type: Number,
    description: 'The age of the player',
    example: 20,
  })
  age: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    type: String,
    description: 'The possition of the player',
    example: 'Left mid',
  })
  position: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    required: false,
    type: String,
    description: 'The team id of the the team',
    example: '25e10491-fa71-4b9c-9d74-27399eb42069',
  })
  teamId?: string;
}

export class PlayerResponseDto extends PlayerCreateDto implements Player {
  @IsUUID()
  @IsNotEmpty()
  @ApiPropertyOptional({
    required: true,
    type: String,
    description: 'The id of the the player',
    example: '25e10491-fa71-4b9c-9d74-27399eb42069 ',
  })
  id: string;
}
