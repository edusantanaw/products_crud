import { CreateUserUsecase } from "../../../../application/usecases/user";
import Encrypter from "../../../../helpers/encrypter";
import { UserRepository } from "../../../../infra/repositories";

export function createUserUsecaseFactory() {
  const userRepository = new UserRepository();
  const encrypter = new Encrypter();
  return new CreateUserUsecase(userRepository, encrypter);
}
