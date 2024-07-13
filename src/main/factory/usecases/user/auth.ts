import { AuthUsecase } from "../../../../application/usecases/user/auth";
import Encrypter from "../../../../helpers/encrypter";
import { JwtService } from "../../../../helpers/jwt";
import { UserRepository } from "../../../../infra/repositories";

export function authUsecaseFactory() {
  const userRepository = new UserRepository();
  const encrypter = new Encrypter();
  const jwtService = new JwtService();
  return new AuthUsecase(userRepository, encrypter, jwtService);
}
