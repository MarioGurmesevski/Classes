import {
  IsArray,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from "class-validator";
import { Team } from "../interfaces/team.interface";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmptyArray } from "../../common/validators/is-not-empty-array.validator";
import { Type } from "class-transformer";
import { PlayerResponseDto } from "../../players/dtos/player.dto";

export class TeamStadiumDetailsDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: "The name of the stadium",
    example: "Allianz Arena",
    required: true,
  })
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: "The capacity of the stadium",
    example: 75000,
    required: true,
  })
  capacity: number;
}

export class TeamCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "The name of the Team",
    example: "Real Madrid",
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "The location of the team",
    example: "Madrid, Spain",
  })
  location: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "The league in which the team plays in",
    example: "La Liga",
  })
  league: string;

  @IsString({ each: true })
  @IsArray()
  @IsNotEmptyArray()
  @IsNotEmpty()
  @ApiProperty({
    type: [String],
    description: "The colors od the team jersey",
    required: true,
    example: ["purple", "white"],
  })
  jerseyColors: string[];

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => TeamStadiumDetailsDto)
  @ApiProperty({
    type: TeamStadiumDetailsDto,
    description: "The stadium details",
    required: true,
  })
  stadiumDetails: TeamStadiumDetailsDto;
}

export class TeamResponseDto extends TeamCreateDto implements Team {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    type: String,
    description: "The id of the team",
    example: "uyitg21u6",
  })
  id: string;

  @ApiProperty({
    type: [PlayerResponseDto],
    description: "The players playing for that team ",
    required: true,
  })
  players: PlayerResponseDto[];
}

export class TeamQueryDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: "Search by location",
    example: "Madrid, Spain",
    required: false,
  })
  location?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: "Search by league",
    example: "La Liga",
    required: false,
  })
  league?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: "Search by name",
    example: "Real Madrid",
    required: false,
  })
  name?: string;
}
