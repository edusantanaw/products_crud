import { body } from "express-validator";

export default [
  body("name").isLength({ min: 3 }).isString(),
  body("description").isString().isLength({ min: 3 }),
  body("price").isNumeric(),
];
