import { Inject, Injectable, forwardRef } from "@nestjs/common";
import { TeamCreateDto, TeamQueryDto, TeamResponseDto } from "./dtos/team.dto";
import { Team } from "./teams.entity";
import { Repository, ILike } from "typeorm";
import { PlayersService } from "../players/players.service";

@Injectable()
export class TeamsService {
  constructor(
    @Inject("TEAM_REPOSITORY")
    private teamRepository: Repository<Team>,
    @Inject(forwardRef(() => PlayersService)) private playerService: PlayersService
  ) {}

  getTeams(query: TeamQueryDto): Promise<TeamResponseDto[]> {
    let whereQuery = {};

    if (query?.league) {
      whereQuery = { ...whereQuery, league: ILike(`%${query.league}%`) };
    }

    if (query?.location) {
      whereQuery = { ...whereQuery, location: ILike(`%${query.location}%`) };
    }

    if (query?.name) {
      whereQuery = { ...whereQuery, name: ILike(`%${query.name}%`) };
    }

    return this.teamRepository.find({
      where: whereQuery,
      relations: ["players"],
      order: {
        name: "ASC",
        league: "ASC",
      },
    });
  }

  getTeam(id: string): Promise<TeamResponseDto> {
    return this.teamRepository.findOne({ where: { id }, relations: ["players"] });
  }

  createTeam(body: TeamCreateDto): Promise<TeamResponseDto> {
    return this.teamRepository.save(body);
  }

  async deleteTeam(id: string): Promise<void> {
    const team = await this.getTeam(id);

    console.log(team);

    const hasPlayers = team?.players?.length > 0;

    if (hasPlayers) {
      for (const player of team.players) {
        await this.playerService.removePlayerFromTeam(player.id);
      }
    }

    // await this.teamRepository.delete(id);
  }
}
