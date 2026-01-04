import { TestDataSource } from "../../../../src/infraestructure/database/typeorm/data-source-test";
import { Task } from "../../../../src/domain/task/task.entity";
import { TypeOrmTaskRepository } from "../../../../src/infraestructure/database/typeorm/task.repository.typeorm";

describe("TypeOrmTaskRepository (SQLite", () => {
    let repository: TypeOrmTaskRepository;

    beforeAll(async () => {
        await TestDataSource.initialize();
        repository = new TypeOrmTaskRepository(
            TestDataSource.getRepository("TaskOrmEntity")
        );
    });

    afterAll(async () => {
        await TestDataSource.destroy();
    });

    it("should create and retrieve a task", async () => {
        const task = new Task("1", "Test task", "Description", false);

        await repository.create(task);

        const result = await repository.findById("1");

        expect(result).not.toBeNull();
        expect(result?.id).toBe("1");
        expect(result?.title).toBe("Test task");
        expect(result?.completed).toBe(false);
    });

    it("should return all tasks", async () => {
        const task1 = new Task("2", "Task 2", "Description", false);
        const task2 = new Task("3", "Task 3", "Description", true);

        await repository.create(task1);
        await repository.create(task2);

        const tasks = await repository.findAll();

        expect(tasks.length).toBeGreaterThanOrEqual(2);
    });
});