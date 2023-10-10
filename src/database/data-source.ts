import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUsersTable1696972670238 } from "./migrations/1696972670238-CreateUsersTable"
import User from "../app/entities/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "fatec",
    password: "P@ssword1234",
    database: "typeorm_test",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [CreateUsersTable1696972670238],
    subscribers: [],
})
