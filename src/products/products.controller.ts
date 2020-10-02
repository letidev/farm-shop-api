import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { FindOneParams } from './validation/FindOneParams';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('types')
  public getTypes() {
    return this.productsService.getTypes();
  }

  @Get('all')
  public getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  public findOne(@Param() params: FindOneParams) {
    return this.productsService.findOneById(params.id);
  }
}
