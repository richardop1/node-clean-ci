import { Task } from "../../../domain/task/task.entity";
import { TaskRepository } from "../../../domain/task/task.repository";

export class InMemoryTaskRepository implements TaskRepository {
    private tasks: Task[] = [];

    async create(task: Task): Promise<void> {
        this.tasks.push(task);
    }

    async findAll(): Promise<Task[]> {
        return this.tasks;
    }

    async findById(id: string): Promise<Task | null> {
        return this.tasks.find(task => task.id === id) ?? null;
    }

    async update(task: Task): Promise<void> {
        const index = this.tasks.findIndex(task => task.id === task.id);
        if (index === -1) {
            throw new Error('Task not found');
        }
        this.tasks[index] = task;
    }

    async delete(id: string): Promise<void> {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}