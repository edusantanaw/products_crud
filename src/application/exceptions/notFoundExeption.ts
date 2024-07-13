
export class NotFoundExeption extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NotFoundExeption";
      }
}