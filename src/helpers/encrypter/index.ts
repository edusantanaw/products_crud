import * as bcrypt from "bcrypt";

export default class Encrypter {
  private saltRounds = 10;
  public async generate(value: string) {
    const salt = await bcrypt.genSalt(this.saltRounds);
    const hashedValue = await bcrypt.hash(value, salt);
    return hashedValue;
  }
}
