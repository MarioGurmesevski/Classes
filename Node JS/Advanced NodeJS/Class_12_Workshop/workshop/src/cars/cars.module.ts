import { CarsService } from "./cars.service";
import { CarsController } from "./cars.controller";
import { Module } from "@nestjs/common";
import { carProvider } from "./cars.providers";
import { DatabaseModule } from "../database/database.module";
/*
https://docs.nestjs.com/modules
*/

@Module({
  imports: [DatabaseModule],
  controllers: [CarsController],
  providers: [...carProvider, CarsService],
})
export class CarsModule {}
