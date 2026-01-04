import { DataSource } from "typeorm";
import { TaskOrmEntity } from "./task.orm-entity";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'postgres',
    database: 'tasks-db',
    entities: [TaskOrmEntity],
    synchronize: true, // solo dev,
    logging: false
})