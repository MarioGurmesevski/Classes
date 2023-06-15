import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/product';
import { Model } from 'mongoose';
import {
  ProductCreateDto,
  ProductResponseDto,
  ProductUpdateDto,
} from './dtos/product.dto';
import { ProductQueryDto, SortDierction } from './dtos/product-query.dto';
import { Logger } from 'nestjs-pino';

@Injectable()
export class ProductsService {
  // private readonly logger: Logger = new Logger('ProductsService',);
  constructor(@Inject('PRODUCT_MODEL') private productModel: Model<Product>) {}

  getProducts(query: ProductQueryDto): Promise<ProductResponseDto[]> {
    return this.productModel
      .find({
        title: { $regex: query?.title ?? '', $options: 'i' },
      })
      .limit(query.size)
      .sort({ title: query?.sortDierction ?? SortDierction.ASC });
  }
  getProduct(id: string): Promise<ProductResponseDto> {
    return this.productModel.findById(id);
  }

  createProduct(product: ProductCreateDto): Promise<ProductResponseDto> {
    return this.productModel.create(product);
  }
  async updateProduct(
    id: string,
    updateData: ProductUpdateDto,
  ): Promise<ProductResponseDto> {
    const product = await this.getProduct(id);

    if (!product) {
      throw new NotFoundException(`The product with id: ${id} is not found`);
    }

    return this.productModel.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
  }
}
