import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  location: string;
  @Column()
  league: string;
}
