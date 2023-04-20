import { ShopsModule } from './shops/shops.module';
import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { PurchasesModule } from './purchases/purchases.module';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    ShopsModule,
    ConfigModule.forRoot(),
    LoggerModule.forRoot(),
    ProductsModule,
    PurchasesModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
