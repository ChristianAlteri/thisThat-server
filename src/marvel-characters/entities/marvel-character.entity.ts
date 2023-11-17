import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class MarvelCharacter {
    /**
     * age
     * name
     * gender
     * film status
     */

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 100})
    name: string;

    @Column({type: 'int'})
    age: number;

    @Column({type: 'enum', enum: ['male', 'female', 'other']})
    gender: string;

    // if they are currently active in Marvel films.
    @Column({type: 'boolean'})
    active: boolean;
   
}

// marvel-character/entities/marvel-character.entity.ts