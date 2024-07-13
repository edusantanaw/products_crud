import * as bcrypt from "bcrypt";
import {
  ICompareHash,
  IGenerateHash,
} from "../../application/helpers/encrypter";

export default class Encrypter implements IGenerateHash, ICompareHash {
  private saltRounds = 10;
  public async generate(value: string) {
    const salt = await bcrypt.genSalt(this.saltRounds);
    const hashedValue = await bcrypt.hash(value, salt);
    return hashedValue;
  }
  
  public compare(value: string, hash: string): Promise<boolean> {
    const isEquals = bcrypt.compare(value, hash);
    return isEquals;
  }
}
