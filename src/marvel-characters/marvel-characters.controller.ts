import { Controller, Post, Body, Get } from '@nestjs/common';
import { MarvelCharactersService } from './marvel-characters.service';
import { CreateMarvelCharacterDto } from './dto/create-marvel-character.dto';
import { MarvelCharacter } from './entities/marvel-character.entity';

@Controller('marvel-characters')
export class MarvelCharacterController {
  constructor(private readonly marvelCharactersService: MarvelCharactersService) {}

  @Post()
  async create(@Body() createMarvelCharacterDto: CreateMarvelCharacterDto): Promise<MarvelCharacter> {
    return this.marvelCharactersService.create(createMarvelCharacterDto);
  }

  @Get()
  async findAll(): Promise<MarvelCharacter[]> {
    return this.marvelCharactersService.findAll();
  }
}