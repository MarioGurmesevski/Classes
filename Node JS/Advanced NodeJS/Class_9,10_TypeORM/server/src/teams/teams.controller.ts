import { TeamCreateDto, TeamResponseDto } from './dtos/team.dto';
import { TeamsService } from './teams.service';
/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  getTeams(): TeamResponseDto[] {
    return this.teamsService.getTeams();
  }
  @Post()
  @UsePipes(ValidationPipe)
  createTeam(@Body() body: TeamCreateDto): Promise<TeamResponseDto> {
    return this.teamsService.createTeam(body);
  }
}
