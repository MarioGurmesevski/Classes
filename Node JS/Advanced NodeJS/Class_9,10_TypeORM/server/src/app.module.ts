import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PlayersModule, TeamsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
