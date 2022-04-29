import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { IProduct } from './interfaces/product.interfaces';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('products') private readonly productModel: Model<IProduct>,
  ) {}

  async getProducts(): Promise<IProduct[]> {
    return await this.productModel.find();
  }

  async getProduct(id: string): Promise<IProduct> {
    const product = await this.productModel.findById(id);

    if (!product)
      throw new NotFoundException(`No se ha encontrado el id ${id}`);

    return product;
  }

  async createProduct(productDto: CreateProductDto) {
    const product = await new this.productModel(productDto);
    return await product.save();
  }

  async updateProduct(id: string, productDto: UpdateProductDto) {
    
    const product = await this.productModel.findByIdAndUpdate(id, productDto, { new: true})

    if (!product)
      throw new NotFoundException(`No se ha encontrado el id ${id}`);

    return product;
  }

  async deleteProduct(id: string) {
    const product = await this.productModel.findByIdAndDelete(id);

    if (!product)
      throw new NotFoundException(`No se ha encontrado el id ${id}`);
    return product;
  }
}
