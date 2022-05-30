import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { ConservationStateService } from './conservation-state.service';
import { Response } from 'express';
import { CreateConservationStateDto } from './dto/create-conservation-state.dto';

@Controller('conservation-state')
export class ConservationStateController {
  constructor(
    private readonly conservationStateService: ConservationStateService,
  ) {}

  @Get()
  async getAllConservationState(@Res() res: Response) {
    const conservationState = await this.conservationStateService.findAll();
    return res.status(HttpStatus.OK).json({
      conservationState,
    });
  }

  @Post()
  async addConservationState(
    @Body() createConservationStateDto: CreateConservationStateDto,
    @Res() res: Response,
  ) {
    const conservationState =
      await this.conservationStateService.addConservationState(
        createConservationStateDto,
      );
    return res.status(HttpStatus.OK).json({
      conservationState,
    });
  }
}
