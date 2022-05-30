import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ConservationState } from './schema/conservation-state';
import { Model } from 'mongoose';
import { CreateConservationStateDto } from './dto/create-conservation-state.dto';

@Injectable()
export class ConservationStateService {
  constructor(
    @InjectModel(ConservationState.name)
    private readonly conservationStateModel: Model<ConservationState>,
  ) {}

  public async findAll(): Promise<ConservationState[]> {
    return await this.conservationStateModel.find();
  }

  async getConservationState(id: string): Promise<ConservationState> {
    const conservationState = await this.conservationStateModel.findOne({
      id: id,
    });

    if (!conservationState) throw new NotFoundException(`id not found ${id}`);
    return conservationState;
  }

  async addConservationState(
    createConservationStateDto: CreateConservationStateDto,
  ) {
    const conservationState = await new this.conservationStateModel(
      createConservationStateDto,
    );
    return await conservationState.save();
  }
}
