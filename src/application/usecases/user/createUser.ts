import { UserEntity } from "../../../domain/entities";
import { ApplicationValidationException } from "../../exceptions/applicationValidationException";
import { IGenerateHash } from "../../helpers/encrypter";
import { ICreateRepository } from "../../repositories/create";
import { ILoadByEmailRepository } from "../../repositories/loadByEmail";

type data = {
  name: string;
  email: string;
  password: string;
};

interface ICreateUserRepository
  extends ILoadByEmailRepository<IUser>,
    ICreateRepository<IUser> {}

export class CreateUserUsecase {
  constructor(
    protected userRepository: ICreateUserRepository,
    protected encrypter: IGenerateHash
  ) {}

  public async create(data: data): Promise<Omit<IUser, "password">> {
    const emailAlreadyInUse = await this.userRepository.loadByEmail(data.email);
    if (emailAlreadyInUse)
      throw new ApplicationValidationException(
        "Already exists a user with this e-mail!"
      );
    const hashPassword = await this.encrypter.generate(data.password);
    const userEntity = new UserEntity({
      ...data,
      password: hashPassword,
    });
    const createdUser: Optional<IUser, "password"> =
      await this.userRepository.create(userEntity.getUser);
    delete createdUser.password;
    return createdUser;
  }
}
