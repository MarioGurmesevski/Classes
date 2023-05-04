import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Max,
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
    example: 'Lionel Messi',
  })
  name: string;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    required: true,
    description: 'The age of the player',
    example: 20,
  })
  age: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: 'The position in which the player plays',
    example: 'ST',
  })
  position: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(99)
  @ApiProperty({
    type: Number,
    required: true,
    description: 'The number on the players back',
    example: 7,
  })
  number: number;

  @IsOptional()
  @IsString()
  teamId?: string;
}

export class PlayerResponseDto extends PlayerCreateDto implements Player {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: 'The ID of the player',
    example: 'uhdagiuge2',
  })
  id: string;

  @ApiProperty({
    type: Date,
    required: true,
    description: 'Date and time when player has been created',
    example: 'fias',
  })
  createdAt!: Date;
  @ApiProperty({
    type: Date,
    required: true,
    description: 'Date and time when player has been updated',
    example: 'fias',
  })
  updatedAt!: Date;
  @ApiProperty({
    type: Date,
    required: true,
    description: 'Date and time when player has been deleted',
    example: 'fias',
  })
  deletedAt!: Date;
}

export class PlayerAddToTeamDto {
  @ApiProperty({
    type: String,
    required: true,
  })
  @IsUUID()
  @IsNotEmpty()
  playerId: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsUUID()
  @IsNotEmpty()
  teamId: string;
}
