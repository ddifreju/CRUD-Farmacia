import { ProductService } from './service/product.service';
import { Product } from './entities/product.entity';
import { ProductController } from './controller/product.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from '../category/category.module';

@Module({
    imports: [TypeOrmModule.forFeature([Product]), CategoryModule],
    providers: [ProductService],
    controllers: [ProductController],
    exports: [],
})
export class ProductModule { }