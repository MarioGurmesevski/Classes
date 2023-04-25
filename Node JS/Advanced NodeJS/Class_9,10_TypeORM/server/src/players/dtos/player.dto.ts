import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';
import { Player } from '../interfaces/player.interface';

export class PlayerCreateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  age: number;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsOptional()
  @IsString()
  teamId?: string;
}

export class PlayerResponseDto extends PlayerCreateDto implements Player {
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
