import { Player } from './player.entity';
import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { PlayerCreateDto, PlayerResponseDto } from './dtos/player.dto';
/*
https://docs.nestjs.com/providers#services
*/

@Injectable()
export class PlayersService {
  constructor(
    @Inject('PLAYER_REPOSITORY') private playerRepository: Repository<Player>,
  ) {}
  createPlayer(body: PlayerCreateDto): Promise<PlayerResponseDto> {
    return this.playerRepository.save(body);
  }
}
