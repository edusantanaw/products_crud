import { body } from "express-validator";

export const authData = [
  body("email").isEmail(),
  body("password").isString().isLength({ min: 3 }),
];

export const createUserData = [...authData, body("name").isLength({ min: 3 })];
