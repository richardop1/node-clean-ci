import { CreateTaskUseCase } from "../../application/task/create-task.usecase";
import { GetTasksUseCase } from "../../application/task/get-tasks.usecase";
import { TaskMapper } from "./task.mapper";

export class TaskController {
    constructor(
        private createTask: CreateTaskUseCase,
        private getTask: GetTasksUseCase,
    ) { }

    create = async (req: any, res: any) => {
        const task = await this.createTask.execute(req.body.title, req.body.description);
        res.status(201).json(TaskMapper.toResponse(task));
    }

    getAll = async (req: any, res: any) => {
        const tasks = await this.getTask.execute();
        res.status(200).json(tasks.map(TaskMapper.toResponse));
    }
}