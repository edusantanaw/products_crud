export class ApplicationValidationException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ApplicationValidationException";
  }
}
