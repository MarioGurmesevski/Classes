import { Repository } from 'typeorm';
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Player } from './player.entity';
import { PlayerCreateDto, PlayerResponseDto } from './dtos/player.dto';

@Injectable()
export class PlayersService {
  constructor(
    @Inject('PLAYER_REPOSITORY')
    private playerRepository: Repository<Player>,
  ) {}

  getPlayers(): Promise<PlayerResponseDto[]> {
    return this.playerRepository.find({
      // withDeleted: true,
    });
  }

  async getPlayerById(id: string): Promise<PlayerResponseDto> {
    const player = await this.playerRepository.findOne({
      where: { id }, // where: { id: id }
      relations: ['team'],
    });

    if (!player) {
      throw new NotFoundException(`Player with ID ${id} doesn't exist `);
    }

    return player;
  }

  createPlayer(body: PlayerCreateDto): Promise<PlayerResponseDto> {
    return this.playerRepository.save(body);
  }

  async addPlayerToTeam(playerId: string, teamId: string) {
    const player = await this.getPlayerById(playerId);

    const alreadyPartOfTheTeam = player?.teamId === teamId;

    if (alreadyPartOfTheTeam) {
      throw new BadRequestException(
        `Player with ID: ${playerId} is already a part of this team.`,
      );
    }

    await this.playerRepository.save({
      id: playerId,
      teamId, // teamId: teamId
    });

    return this.getPlayerById(playerId);
  }

  async updatePlayerShirtNumber(
    id: string,
    number: number,
  ): Promise<PlayerResponseDto> {
    const player = await this.getPlayerById(id);

    try {
      await this.playerRepository.save({
        id,
        number,
      });
    } catch (error) {
      throw new BadRequestException(
        `Other player already has the number ${number} assigned`,
      );
    }
    return this.getPlayerById(id);
  }

  async deletePlayer(id: string): Promise<void> {
    await this.playerRepository.softDelete(id);
  }
}
