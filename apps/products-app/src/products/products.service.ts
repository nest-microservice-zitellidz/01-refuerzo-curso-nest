import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductsService {

  private products: Product[] = [];



  create(createProductDto: CreateProductDto) {
    
    const { name, price, description} = createProductDto;
    
    const newProduct = new Product(uuid(), name, description, price);
    this.products.push(newProduct);

    return newProduct;
  }

  findAll() {
    
    return this.products;
  }

  findOne(id: string):Product {

    const product = this.products.find(product => product.id === id);

    if (!product) {
      throw new NotFoundException(`Producto ${id} no encontrado. `)
    }
    
    return  product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    
    const product = this.findOne(id);

    const { id:_, ...values } = updateProductDto;
    
    product.updateWith({...values});

    return product;

  }

  remove(id: string):Product {
    const product = this.findOne(id);

    this.products = this.products.filter(product => product.id !== id);

    return product;
  }
}
