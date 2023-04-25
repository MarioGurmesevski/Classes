import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column('int')
  age: number;
  @Column()
  position: string;
}
