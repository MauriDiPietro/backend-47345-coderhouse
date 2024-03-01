import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(product: Product): Product;
    findAll(order: string): Product[];
    findOne(id: string): true | Product;
    update(id: string, updateProductDto: UpdateProductDto): string;
    remove(id: string): string;
}
