import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export enum SortDierction {
  ASC = 'asc',
  DESC = 'desc',
}

export class ProductQueryDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    example: 'orange',
  })
  title?: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({
    type: Number,
    example: 10,
    default: 10,
  })
  size?: number = 10;
  @IsEnum(SortDierction)
  @IsOptional()
  @ApiPropertyOptional({
    type: 'enum',
    enum: SortDierction,
    description: 'The sort direction',
    example: SortDierction.ASC,
  })
  sortDierction?: SortDierction;
}
