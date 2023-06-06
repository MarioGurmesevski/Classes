import { Module } from "@nestjs/common";
import { PlayersController } from "./players.controller";
import { PlayersService } from "./players.service";
import { playerProvider } from "./players.providers";
import { DatabaseModule } from "../database/database.module";
import { TeamsService } from "../teams/teams.service";
import { teamProviders } from "../teams/team.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [PlayersController],
  providers: [...playerProvider, ...teamProviders, PlayersService, TeamsService],
})
export class PlayersModule {}
