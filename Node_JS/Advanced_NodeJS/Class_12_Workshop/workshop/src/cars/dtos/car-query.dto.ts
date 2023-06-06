import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class carQueryDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    example: "BMW",
    description: "Search by the brand of the car",
  })
  brand?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    example: "Black",
    description: "Search by the color of the car",
  })
  color?: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({
    type: Number,
    example: 2010,
    description: "Search by the year of the car",
  })
  year?: number;

  // @IsNumber()
  // @IsOptional()
  // @ApiPropertyOptional({
  //   type: Number,
  //   example: 5000,
  //   description: "Update the price of the car",
  // })
  // price?: number;
  // @IsBoolean()
  // @IsOptional()
  // @ApiPropertyOptional({
  //   type: Number,
  //   example: 5000,
  //   description: "Update the availability of the car",
  // })
  // isAvailable?: boolean;
}
