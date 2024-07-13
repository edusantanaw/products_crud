import * as bcrypt from "bcrypt";
import { IGenerateHash } from "../../application/helpers/encrypter";

export default class Encrypter implements IGenerateHash {
  private saltRounds = 10;
  public async generate(value: string) {
    const salt = await bcrypt.genSalt(this.saltRounds);
    const hashedValue = await bcrypt.hash(value, salt);
    return hashedValue;
  }
}
