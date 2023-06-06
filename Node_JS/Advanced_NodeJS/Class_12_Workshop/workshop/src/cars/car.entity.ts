import { PrimaryGeneratedColumn, Column, Entity, DeleteDateColumn } from "typeorm";

@Entity()
export class Car {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column("int")
  year: number;

  @Column("int")
  price: number;

  @Column()
  color: string;

  @Column()
  isAvailable: boolean;

  @DeleteDateColumn()
  deletedAt?: Date;
}
