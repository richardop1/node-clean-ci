import { Task } from "../../domain/task/task.entity";

export const TaskMapper = {
    toResponse(task: Task) {
        return {
            id: task.id,
            title: task.title,
            description: task.description,
            completed: task.completed
        };
    }
}