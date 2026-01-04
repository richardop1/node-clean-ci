import "reflect-metadata";
import { DataSource } from "typeorm";
import { TaskOrmEntity } from "./task.orm-entity";

export const TestDataSource = new DataSource({
    type: "sqlite",
    database: ":memory:",
    dropSchema: true,
    entities: [TaskOrmEntity],
    synchronize: true,
    logging: false,
});