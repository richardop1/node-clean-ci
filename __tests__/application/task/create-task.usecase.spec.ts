// importa las interfaces desde el dominio
import { IdGenerator } from "../../../src/domain/common/id-generator";
import { TaskRepository } from "../../../src/domain/task/task.repository";
// importa el caso de uso a evaluar
import { CreateTaskUseCase } from "../../../src/application/task/create-task.usecase";
import { Task } from "../../../src/domain/task/task.entity";

describe('CreateTaskUseCase', () => {
    let taskRepository: jest.Mocked<TaskRepository>;
    let idGenerator: jest.Mocked<IdGenerator>;
    let useCase: CreateTaskUseCase;

    // preparar el entorno antes de cada test
    beforeEach(() => {
        // crea un mock del repositorio asignandole funciones jest
        taskRepository = {
            create: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            delete: jest.fn()
        };

        // crea un mock del idGenerator asignandole funciones jest
        idGenerator = {
            generate: jest.fn()
        };
        // crea el caso de uso inyectando las interfaces mockeadas
        useCase = new CreateTaskUseCase(taskRepository, idGenerator);
    });

    it("should create a task and save it", async () => {
        // Arrange
        const fakeId = "task-id-123";
        const title = "Task 1";
        const description = "Description 1";

        // Configura el mock para que retorne el id falso
        idGenerator.generate.mockReturnValue(fakeId);

        // Act
        const result = await useCase.execute(title, description);

        // Assert
        expect(idGenerator.generate).toHaveBeenCalledTimes(1);
        expect(taskRepository.create).toHaveBeenCalledTimes(1);
        expect(taskRepository.create).toHaveBeenCalledWith(
            expect.any(Task)
        );

        expect(result).toEqual(
            expect.objectContaining({
                id: fakeId,
                title,
                description,
                completed: false
            })
        );
    });
});