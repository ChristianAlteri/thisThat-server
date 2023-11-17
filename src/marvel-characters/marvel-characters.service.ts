// marvel-characters/marvel-characters.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMarvelCharacterDto } from './dto/create-marvel-character.dto';
import { MarvelCharacter } from './entities/marvel-character.entity';

@Injectable()
export class MarvelCharactersService {
  private marvelCharacters: MarvelCharacter[] = [];

  create(createMarvelCharacterDto: CreateMarvelCharacterDto): MarvelCharacter {

    const newMarvelCharacter: MarvelCharacter = {
      id: this.marvelCharacters.length + 1, 
      ...createMarvelCharacterDto,
    };


    this.marvelCharacters.push(newMarvelCharacter);

    return newMarvelCharacter;
  }

  async findAll(): Promise<MarvelCharacter[]> {
    return await this.marvelCharacters;
  }
}
