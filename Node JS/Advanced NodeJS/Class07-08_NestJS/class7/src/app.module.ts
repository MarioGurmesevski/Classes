import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { PurchasesModule } from './purchases/purchases.module';

@Module({
  imports: [ConfigModule.forRoot(), ProductsModule, PurchasesModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
