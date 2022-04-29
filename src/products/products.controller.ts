import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductsService } from './products.service';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  async getProducts(@Res() res: Response) {
    const products = await this.productService.getProducts();
    return res.status(HttpStatus.OK).json({
      message: 'Productos almacenados',
      products,
    });
  }

  @Get(':id')
  async getProduct(@Param('id') id: string, @Res() res: Response) {
    const product = await this.productService.getProduct(id);
    return res.status(HttpStatus.OK).json({
      message: 'Producto almacenados',
      product,
    });
  }

  @Post()
  async createProduct(
    @Body() productDto: CreateProductDto,
    @Res() res: Response,
  ) {
    const product = await this.productService.createProduct(productDto);
    return res.status(HttpStatus.OK).json({
      message: 'Productos almacenados correctamente',
      product,
    });
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() productDto: UpdateProductDto,
    @Res() res: Response,
  ) {
    const product = await this.productService.updateProduct(id, productDto);
    return res.status(HttpStatus.OK).json({
      message: 'Productos editado',
      product,
    });
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string, @Res() res: Response) {
    const product = await this.productService.deleteProduct(id);
    return res.status(HttpStatus.OK).json({
      message: 'Productos eliminado',
      product,
    });
  }
}
