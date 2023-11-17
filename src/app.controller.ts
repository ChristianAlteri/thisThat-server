import { Controller, Get } from '@nestjs/common';
import { MarvelCharactersService } from './marvel-characters/marvel-characters.service';
import { CreateMarvelCharacterDto } from './marvel-characters/dto/create-marvel-character.dto';

@Controller('marvel-characters')
export class MarvelCharacterController {
  constructor(private readonly marvelCharactersService: MarvelCharactersService) {}

}
