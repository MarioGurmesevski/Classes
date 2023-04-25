import { TeamsModule } from './teams/teams.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [TeamsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
