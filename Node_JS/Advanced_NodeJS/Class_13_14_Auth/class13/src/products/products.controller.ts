/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Headers,
  SetMetadata,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ProductsService } from './products.service';
import { RolesGuard } from '../auth/guards/roles.guard';
import { RolesEnum } from '../auth/roles.enum';
import { Roles } from '../auth/decorators/roles.decorator';
import { ProductCreateDto } from './dtos/product.dto';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { UserResponseDto } from '../auth/dtos/auth.dto';

@ApiBearerAuth()
@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // @SetMetadata('roles', [RolesEnum.admin])
  @Roles(RolesEnum.admin, RolesEnum.editor, RolesEnum.user)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  getProducts(@Headers() headers: Headers) {
    console.log(headers);
    return [
      {
        id: 'fsaf',
        name: 'Tomato',
      },
    ];
  }

  @Roles(RolesEnum.admin, RolesEnum.editor)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  @UsePipes(ValidationPipe)
  createProduct(
    @GetUser() user: UserResponseDto,
    @Body() body: ProductCreateDto,
  ) {
    console.log('user', user);
    this.productsService.createProduct(body, user.username);
  }
}
