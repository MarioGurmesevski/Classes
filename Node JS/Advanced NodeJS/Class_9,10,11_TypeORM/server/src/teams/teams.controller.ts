import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe, Delete } from "@nestjs/common";
import { TeamsService } from "./teams.service";
import { TeamCreateDto, TeamResponseDto, TeamQueryDto } from "./dtos/team.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Teams")
@Controller("teams")
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  @UsePipes(ValidationPipe)
  getTeams(@Query() query: TeamQueryDto): Promise<TeamResponseDto[]> {
    return this.teamsService.getTeams(query);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTeam(@Body() body: TeamCreateDto): Promise<TeamResponseDto> {
    return this.teamsService.createTeam(body);
  }

  @Delete(":id")
  deleteTeam(@Param("id") id: string): Promise<void> {
    return this.teamsService.deleteTeam(id);
  }
}
