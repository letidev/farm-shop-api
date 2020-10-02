import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(), ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
