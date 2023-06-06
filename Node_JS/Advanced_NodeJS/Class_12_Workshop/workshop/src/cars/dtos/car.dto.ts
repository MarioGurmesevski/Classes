import { IsBoolean, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Car } from "../interface/car.interface";

export class CarCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "The brand of the car",
    example: "BMW",
  })
  brand: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "The model of the car",
    example: "M5",
  })
  model: string;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    required: true,
    description: "The year of the car",
    example: 2010,
  })
  year: number;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    required: true,
    description: "The price of the car",
    example: 6000,
  })
  price: number;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "The color of the car",
    example: "Black",
  })
  color: string;
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    type: Boolean,
    required: true,
    description: "The availability of the car",
    example: true,
  })
  isAvailable: boolean;
}

export class CarResponseDto extends CarCreateDto implements Car {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "The ID of the Car",
    example: "iFSAjofas",
  })
  id: string;

  @ApiPropertyOptional({
    type: Date,
    required: false,
    description: "Date and time when car has been deleted",
    example: "2023-05-02T18:24:24.713Z",
  })
  deletedAt?: Date;
}

export class CarUpdateDto extends CarCreateDto {}
