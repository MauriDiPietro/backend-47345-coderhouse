import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  products: Product[]
  constructor(){
    this.products = [];
  }

  create(prod: Product): Product {
    this.products.push(prod)
    return prod
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: string): Product | boolean {
    const prod = this.products.find(p => p.id === id);
    if(!prod) return false;
    else return prod;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
