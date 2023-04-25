/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { PlayerCreateDto, PlayerResponseDto } from './dtos/player.dto';
import { PlayersService } from './players.service';

@Controller()
export class PlayersController {
  constructor(private readonly playerService: PlayersService) {}
  @Post()
  createPlayer(@Body() body: PlayerCreateDto): Promise<PlayerResponseDto> {
    return this.playerService.createPlayer(body);
  }
}
