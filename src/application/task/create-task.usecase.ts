import { IdGenerator } from "../../domain/common/id-generator";
import { Task } from "../../domain/task/task.entity";
import { TaskRepository } from "../../domain/task/task.repository";

export class CreateTaskUseCase {
    constructor(private readonly repo: TaskRepository, private readonly idGenerator: IdGenerator) { }

    async execute(title: string, description: string) {
        const task = new Task(this.idGenerator.generate(), title, description);
        await this.repo.create(task);
        return task;
    }
}