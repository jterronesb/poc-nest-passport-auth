import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateOperationTypeDto } from './dto/create-operation-type.dto';
import { OperationTypeService } from './operation-type.service';
@Controller('operation-type')
export class OperationTypeController {
  constructor(private readonly operationTypeService: OperationTypeService) {}

  @Get()
  async getAllOperationType(@Res() res: Response) {
    const operationType = await this.operationTypeService.findAll();
    return res.status(HttpStatus.OK).json({
      operationType,
    });
  }

  @Post()
  async addOperationType(
    @Body() createOperationTypeDto: CreateOperationTypeDto,
    @Res() res: Response,
  ) {
    const operationType = await this.operationTypeService.addOperationType(
      createOperationTypeDto,
    );
    return res.status(HttpStatus.OK).json({
      operationType,
    });
  }
}
