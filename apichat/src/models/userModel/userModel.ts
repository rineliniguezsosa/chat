import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users_test_rineliniguez')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  middlename!: string;

  @Column()
  paternalsurname!: string;

  @Column()
  maternalsurname!: string;

  @Column()
  birthdate!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;
}