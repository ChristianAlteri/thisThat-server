import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateMarvelCharacterDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsInt()
  age: number;

  @IsString()
  @IsEnum(['male', 'female', 'other'])
  gender: string;

  @IsBoolean()
  active: boolean;
}
