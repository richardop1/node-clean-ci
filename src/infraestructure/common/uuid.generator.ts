import { randomUUID } from "crypto";
import { IdGenerator } from "../../domain/common/id-generator";

export class UuidGenerator implements IdGenerator {
    generate(): string {
        return randomUUID();
    }
}