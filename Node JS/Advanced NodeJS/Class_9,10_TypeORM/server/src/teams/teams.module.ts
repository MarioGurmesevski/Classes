import { DatabaseModule } from '../database/database.module';
import { teamProviders } from './team.providers';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [TeamsController],
  providers: [...teamProviders, TeamsService],
})
export class TeamsModule {}
