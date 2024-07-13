import { CreateUserController } from "../../../../controllers/user";
import { createUserUsecaseFactory } from "../../usecases/user";

export function createUserControllerFactory() {
  return new CreateUserController(createUserUsecaseFactory());
}
