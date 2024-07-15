import { IUser } from "../../../@types/entities";
import { ApplicationValidationException } from "../../exceptions";
import { NotFoundExeption } from "../../exceptions/notFoundExeption";
import { ICompareHash } from "../../helpers/encrypter";
import { ITokenGenerator } from "../../helpers/jwt";
import { ILoadByEmailRepository } from "../../repositories/loadByEmail";

export class AuthUsecase {
  constructor(
    protected userRepository: ILoadByEmailRepository<IUser>,
    protected encrypter: ICompareHash,
    protected jwtService: ITokenGenerator
  ) {}

  public async auth(email: string, password: string) {
    const user = await this.userRepository.loadByEmail(email);
    if (!user) throw new NotFoundExeption("User not found!");
    const isPassValid = await this.encrypter.compare(password, user.password);
    if (!isPassValid)
      throw new ApplicationValidationException("E-mail / password invalid!");
    const accessToken = await this.jwtService.generate(user.id);
    return accessToken;
  }
}
