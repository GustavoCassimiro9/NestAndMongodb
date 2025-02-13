/* eslint-disable */
import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { IsString, IsEmail, IsNotEmpty, IsMongoId } from 'class-validator';

@Entity()
export class User {
  @ObjectIdColumn()
  @IsMongoId()  
  id: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  password: string;
}
