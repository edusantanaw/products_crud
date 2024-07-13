import { UserEntity } from "../../../domain/entities";
import { ApplicationValidationException } from "../../exceptions/applicationValidationException";
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

interface IGenerateHash {
  generate(value: string): Promise<string>;
}

export class CreateUserUsecase {
  constructor(
    protected userRepository: ICreateUserRepository,
    protected encrypter: IGenerateHash
  ) {}

  public async create(data: data) {
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
    const createdUser = await this.userRepository.create(userEntity.getUser);
    return createdUser;
  }
}
