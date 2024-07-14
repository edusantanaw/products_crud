import { Request, Response, NextFunction } from "express";
import { JwtService } from "../../helpers/jwt";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization) return res.status(401).send("Token is required!");
    const [bearer, token] = authorization?.split(" ");
    if (!bearer || bearer != "Bearer")
      return res.status(401).send("Token is required!");
    await JwtService.verify(token);
    next();
  } catch (error) {
    return res.status(401).send("Token is invalid!");
  }
};
