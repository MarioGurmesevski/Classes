import { DatabaseModule } from '../database/database.module';
import { PlayersController } from './players.controller';
import { playerProviders } from './players.providers';
import { PlayersService } from './players.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [PlayersController],
  providers: [...playerProviders, PlayersService],
})
export class PlayersModule {}
