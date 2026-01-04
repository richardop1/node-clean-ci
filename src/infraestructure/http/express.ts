import express from "express";
import taskRoutes from "./routes/task.routes";
import { errorHandler } from "./middlewares/error-handler.middeware";

export function createServer() {
    const app = express();

    app.use(express.json());
    app.use(errorHandler);
    app.use('/tasks', taskRoutes);

    return app;
}