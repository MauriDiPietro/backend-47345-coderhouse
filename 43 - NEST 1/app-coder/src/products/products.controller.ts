import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Post,
  HttpException,
  NotFoundException,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Query, Request } from '@nestjs/common/decorators/http/route-params.decorator';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() product: Product): Product {
    const prod = this.productsService.create(product);
    if (!prod) {
      throw new HttpException('Error create product', 404);
    } else return prod;
  }

  @Get()
  findAll(@Query('order') order: string) {
    console.log('query____>', order);
    const products = this.productsService.findAll();
    if(products) return products;
    throw new HttpException('No products found', 404);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const prod = this.productsService.findOne(id);
    if(prod) return prod;
    throw new NotFoundException('Product not found')
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
