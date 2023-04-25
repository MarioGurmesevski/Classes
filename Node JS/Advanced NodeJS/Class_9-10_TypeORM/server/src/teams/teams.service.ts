/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { TeamResponseDto } from './dtos/team.dto';

@Injectable()
export class TeamsService {
  getTeams(): TeamResponseDto[] {
    return [
      {
        id: 'POgijsdio12ri',
        name: 'Real Madrid',
        location: 'Madrid,Spain',
        league: 'La Liga',
      },
    ];
  }
}
