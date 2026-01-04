import { AppError } from "../../../shared/errors/app-error";

export class TaskNotFoundError extends AppError {
    statusCode = 404;
    constructor() {
        super('Task not found');
    }
}