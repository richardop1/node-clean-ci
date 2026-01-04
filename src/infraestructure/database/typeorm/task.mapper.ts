import { Task } from "../../../domain/task/task.entity";
import { TaskOrmEntity } from "./task.orm-entity";

export class TaskOrmMapper {
    static toDomain(entity: TaskOrmEntity): Task {
        return new Task(
            entity.id,
            entity.title,
            entity.description,
            entity.completed
        );
    }

    static toOrm(task: Task): TaskOrmEntity {
        const orm = new TaskOrmEntity();

        orm.id = task.id;
        orm.title = task.title;
        orm.description = task.description;
        orm.completed = task.completed

        return orm;
    }

}