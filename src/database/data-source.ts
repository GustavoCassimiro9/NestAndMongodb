/* eslint-disable */
import "reflect-metadata";
import { User } from "src/user/entities/user.entity";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mongodb",
  url: process.env.MONGO_URI,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  entities: [User],
  synchronize: true, 
});