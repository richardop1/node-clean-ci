import { TaskRepository } from "../../domain/task/task.repository";

export class GetTasksUseCase {
    constructor(private readonly repo: TaskRepository) { }

    execute() {
        return this.repo.findAll();
    }
}