import jwt from "jsonwebtoken";
import { ITokenGenerator } from "../../application/helpers/jwt";
import { dotenv } from "../../main/config";
import { resolve } from "path";

dotenv();

const SECRET = process.env.JWT_SECRET ?? "any_secret";

export class JwtService implements ITokenGenerator {
  public async generate(value: string): Promise<string> {
    const token: string = await new Promise((resolve) => {
      const generated = jwt.sign(value, SECRET);
      resolve(generated);
    });
    return token;
  }

  public static async verify(token: string) {
    await new Promise((resolve) => {
      jwt.verify(token, SECRET);
      resolve(null);
    });
  }
}
