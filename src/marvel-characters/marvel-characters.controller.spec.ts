import { Test, TestingModule } from '@nestjs/testing';
import { MarvelCharactersController } from './marvel-characters.controller';
import { MarvelCharactersService } from './marvel-characters.service';

describe('MarvelCharactersController', () => {
  let controller: MarvelCharactersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarvelCharactersController],
      providers: [MarvelCharactersService],
    }).compile();

    controller = module.get<MarvelCharactersController>(MarvelCharactersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
