import { PartialType } from '@nestjs/mapped-types';
import { CreateMarvelCharacterDto } from './create-marvel-character.dto';

export class UpdateMarvelCharacterDto extends PartialType(CreateMarvelCharacterDto) {}
