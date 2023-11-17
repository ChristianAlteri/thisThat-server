import { Test, TestingModule } from '@nestjs/testing';
import { MarvelCharactersService } from './marvel-characters.service';

describe('MarvelCharactersService', () => {
  let service: MarvelCharactersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarvelCharactersService],
    }).compile();

    service = module.get<MarvelCharactersService>(MarvelCharactersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
