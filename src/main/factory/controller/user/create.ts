import { CreateUserController } from "../../../../controllers/user/createUserController";
import { createUserUsecaseFactory } from "../../usecases/user";

export function createUserControllerFactory() {
  return new CreateUserController(createUserUsecaseFactory());
}
