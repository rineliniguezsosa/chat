import { DataSource } from "typeorm"
import { UserEntity } from "../models"


const port = process.env.PORT ? parseInt(process.env.PORT,10) : undefined;

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.HOST,
    port: port,
    username: process.env.USERNAME,
    password:process.env.PASSWORD,
    database:process.env.DB,
    synchronize: true,
    logging: true,
    entities:[UserEntity]
})