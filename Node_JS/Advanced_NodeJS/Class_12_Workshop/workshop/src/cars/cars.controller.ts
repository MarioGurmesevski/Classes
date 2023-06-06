/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Controller,
  ValidationPipe,
  Body,
  Post,
  UsePipes,
  Get,
  Param,
  Put,
  ParseIntPipe,
  Delete,
  Query,
  Patch,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CarsService } from "./cars.service";
import { CarCreateDto, CarResponseDto, CarUpdateDto } from "./dtos/car.dto";
import { carQueryDto } from "./dtos/car-query.dto";

@ApiTags("Cars")
@Controller("cars")
export class CarsController {
  constructor(private readonly carService: CarsService) {}
  @Get()
  getCars(@Query() query: carQueryDto): Promise<CarResponseDto[]> {
    return this.carService.getCars(query);
  }

  @Get("id/:id")
  getCarsById(@Param("id") id: string): Promise<CarResponseDto> {
    return this.carService.getCarById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createCar(@Body() body: CarCreateDto): Promise<CarResponseDto> {
    return this.carService.createCar(body);
  }

  @Put("update/:id")
  @UsePipes(ValidationPipe)
  updateCar(@Param("id") id: string, @Body() updateData: CarUpdateDto): Promise<CarResponseDto> {
    return this.carService.updateCar(id, updateData);
  }

  @Patch(":id/price/:price")
  @UsePipes(ValidationPipe)
  updateCarPrice(@Param("id") id: string, @Param("price", ParseIntPipe) price: number): Promise<CarResponseDto> {
    return this.carService.updateCarPrice(id, price);
  }

  @Patch(":id/isAvailable/:isAvailable")
  @UsePipes(ValidationPipe)
  updateCarAvailability(@Param("id") id: string, @Param("isAvailable") isAvailable: boolean): Promise<CarResponseDto> {
    return this.carService.updateCarAvailability(id, isAvailable);
  }

  @Delete("delete/:id")
  @UsePipes(ValidationPipe)
  deleteCar(@Param("id") id: string): Promise<any> {
    return this.carService.deleteCar(id);
  }
}
