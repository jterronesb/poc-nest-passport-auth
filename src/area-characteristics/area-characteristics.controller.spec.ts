import { Test, TestingModule } from '@nestjs/testing';
import { AreaCharacteristicsController } from './area-characteristics.controller';

describe('AreaCharacteristicsController', () => {
  let controller: AreaCharacteristicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AreaCharacteristicsController],
    }).compile();

    controller = module.get<AreaCharacteristicsController>(AreaCharacteristicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
