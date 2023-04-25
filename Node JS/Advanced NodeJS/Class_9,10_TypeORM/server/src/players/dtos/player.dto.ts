import { IsNotEmpty, IsNumber, IsString, IsUUID, Min } from 'class-validator';
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
}

export class PlayerResponseDto extends PlayerCreateDto implements Player {
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
