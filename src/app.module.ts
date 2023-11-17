import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarvelCharacterController } from './app.controller';
import { AppService } from './app.service';
import { MarvelCharactersModule } from './marvel-characters/marvel-characters.module';
import { MarvelCharacter } from './marvel-characters/entities/marvel-character.entity';
import { MarvelCharactersService } from './marvel-characters/marvel-characters.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'password',
      username: 'christian',
      entities: [MarvelCharacter],
      database: 'this-that-marvel',
      synchronize: true,
      logging: true,
    }),
    MarvelCharactersModule,
  ],
  controllers: [MarvelCharacterController],
  providers: [
    AppService,
    MarvelCharactersService
  ],
})
export class AppModule {}