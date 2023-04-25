import { TeamResponseDto } from './dtos/team.dto';
import { TeamsService } from './teams.service';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';

@Controller('')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  getTeams(): TeamResponseDto[] {
    return this.teamsService.getTeams();
  }
}
