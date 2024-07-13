import { AuthController } from "../../../../controllers/user/authController";
import { authUsecaseFactory } from "../../usecases/user";

export function authControllerFactory() {
  return new AuthController(authUsecaseFactory());
}
