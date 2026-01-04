import { Repository } from "typeorm";
import { TaskRepository } from "../../../domain/task/task.repository";
import { TaskOrmEntity } from "./task.orm-entity";
import { AppDataSource } from "./data-source";
import { Task } from "../../../domain/task/task.entity";
import { TaskOrmMapper } from "./task.mapper";

export class TypeOrmTaskRepository implements TaskRepository {
    // private repo: Repository<TaskOrmEntity>;

    constructor(private readonly repo: Repository<TaskOrmEntity>) {
        // this.repo = AppDataSource.getRepository(TaskOrmEntity);
    }

    async create(task: Task): Promise<void> {
        await this.repo.save(TaskOrmMapper.toOrm(task));
    }
    async findAll(): Promise<Task[]> {
        const entities = await this.repo.find();
        return entities.map(TaskOrmMapper.toDomain);
    }
    async findById(id: string): Promise<Task | null> {
        const entity = await this.repo.findOneBy({ id });
        return entity ? TaskOrmMapper.toDomain(entity) : null;
    }
    async update(task: Task): Promise<void> {
        await this.repo.save(TaskOrmMapper.toOrm(task));
    }
    async delete(id: string): Promise<void> {
        await this.repo.delete(id);
    }
}