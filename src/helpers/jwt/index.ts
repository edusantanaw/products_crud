import jwt from "jsonwebtoken";
import { ITokenGenerator } from "../../application/helpers/jwt";
import { dotenv } from "../../main/config";

dotenv();

export class JwtService implements ITokenGenerator {
  private secret = process.env.JWT_SECRET ?? "any_secret";
  public async generate(value: string): Promise<string> {
    const token: string = await new Promise((resolve) => {
      const generated = jwt.sign(value, this.secret);
      resolve(generated);
    });
    return token;
  }
}
