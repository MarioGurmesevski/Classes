import { ProductStatus } from './../interfaces/product';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  IsOptional,
  IsArray,
  isEnum,
  IsEnum,
} from 'class-validator';
import { Product } from '../interfaces/product';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ProductCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'The title of the product',
    example: 'Orange',
  })
  title: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @ApiProperty({
    type: Number,
    description: 'The price of the product',
    example: 10,
  })
  price: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    type: String,
    description: 'The description of the product',
    example: 'This is a nice orange',
    required: false,
  })
  description?: string;

  @IsString({ each: true })
  @IsArray()
  @ApiProperty({
    type: [String],
    description: 'The colors in which the product is available in',
    example: ['white', 'green'],
  })
  colors: string[];

  @IsString()
  @IsNotEmpty()
  @IsEnum(ProductStatus)
  @ApiProperty({
    type: 'enum',
    enum: ProductStatus,
    description: 'The status of the product',
    example: ProductStatus.available,
  })
  status: ProductStatus;
}

export class ProductResponseDto extends ProductCreateDto implements Product {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'The id of the product',
    example: '64416563575c398019c19718',
  })
  id: string;
}

export class ProductUpdateDto extends ProductCreateDto {}
