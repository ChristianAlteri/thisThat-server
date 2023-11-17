import { Module } from '@nestjs/common';
import { MarvelCharactersService } from './marvel-characters.service';
import { MarvelCharacterController } from './marvel-characters.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarvelCharacter } from './entities/marvel-character.entity';


@Module({
  imports:[TypeOrmModule.forFeature([MarvelCharacter])],
  controllers: [MarvelCharacterController],
  providers: [MarvelCharactersService],
  exports: [MarvelCharactersService],
})
export class MarvelCharactersModule {}
