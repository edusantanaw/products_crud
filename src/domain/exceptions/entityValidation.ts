import { ApplicationValidationException } from "../../application/exceptions";

export class EntityValidationException extends ApplicationValidationException {
  constructor(message: string) {
    super(message);
    this.name = "EntityValidationException";
  }
}
