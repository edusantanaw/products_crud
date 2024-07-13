import { ApplicationValidationException } from "../../application/exceptions";
import { httpStatusServerError } from "../../helpers/http";

export default (error: unknown): IHttpStatus => {
  if (error instanceof ApplicationValidationException) {
    return {
      statusCode: 400,
      data: {
        name: error.name,
        message: error.message,
      },
    };
  }
  return httpStatusServerError();
};
