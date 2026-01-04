import { CreateTaskUseCase } from "../../application/task/create-task.usecase";
import { GetTasksUseCase } from "../../application/task/get-tasks.usecase";
import { InMemoryTaskRepository } from "../database/in-memory/task.repository.impl";
import { TaskController } from "../../interfaces/task/task.controller";
import { UuidGenerator } from "../common/uuid.generator";

const repo = new InMemoryTaskRepository();
const idGenerator = new UuidGenerator();

const createTask = new CreateTaskUseCase(repo, idGenerator);
const getTasks = new GetTasksUseCase(repo);

export const taskController = new TaskController(createTask, getTasks);