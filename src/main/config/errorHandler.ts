import { ApplicationValidationException } from "../../application/exceptions";
import { NotFoundExeption } from "../../application/exceptions/notFoundExeption";
import { httpStatusServerError } from "../../helpers/http";

export default (error: unknown): IHttpStatus => {
  console.log(error)
  if (error instanceof ApplicationValidationException) {
    return {
      statusCode: 400,
      data: {
        name: error.name,
        message: error.message,
      },
    };
  }
  if (error instanceof NotFoundExeption) {
    return {
      statusCode: 404,
      data: {
        name: error.name,
        message: error.message,
      },
    };
  }
  return httpStatusServerError();
};
