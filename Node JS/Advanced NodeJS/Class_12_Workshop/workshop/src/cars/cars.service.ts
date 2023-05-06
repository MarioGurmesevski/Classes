import { Query } from "@nestjs/common";
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, Inject } from "@nestjs/common";
import { CarCreateDto, CarResponseDto, CarUpdateDto } from "./dtos/car.dto";
import { Repository, DeleteResult, ILike } from "typeorm";
import { Car } from "./car.entity";
import { carQueryDto } from "./dtos/car-query.dto";

@Injectable()
export class CarsService {
  constructor(
    @Inject("CAR_REPOSITORY")
    private carRepository: Repository<Car>
  ) {}

  getCars(query: carQueryDto): Promise<CarResponseDto[]> {
    let whereQuery = {};

    if (query?.brand) {
      whereQuery = { ...whereQuery, brand: ILike(`%${query.brand}%`) };
    }
    if (query?.color) {
      whereQuery = { ...whereQuery, color: ILike(`%${query.color}%`) };
    }
    if (query?.year) {
      whereQuery = { ...whereQuery, year: query.year };
    }

    return this.carRepository.find({
      where: whereQuery,
    });
  }

  getCarById(id: string): Promise<CarResponseDto> {
    return this.carRepository.findOne({ where: { id } });
  }

  createCar(body: CarCreateDto): Promise<CarResponseDto> {
    return this.carRepository.save(body);
  }

  async updateCar(id: string, updateData: CarUpdateDto): Promise<CarResponseDto> {
    return this.carRepository.save({ ...updateData, id: id });
  }

  async updateCarPrice(id: string, price: number): Promise<CarResponseDto> {
    await this.getCarById(id);

    await this.carRepository.save({
      id,
      price,
    });

    return this.getCarById(id);
  }

  async updateCarAvailability(id: string, isAvailable: boolean): Promise<CarResponseDto> {
    await this.getCarById(id);

    await this.carRepository.save({
      id,
      isAvailable,
    });

    return this.getCarById(id);
  }

  async deleteCar(id: string): Promise<DeleteResult> {
    return await this.carRepository.softDelete(id);
  }
}
