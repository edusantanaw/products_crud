import { ApplicationValidationException } from "../../application/exceptions";
import { NotFoundExeption } from "../../application/exceptions/notFoundExeption";
import { httpStatusServerError } from "../../helpers/http";
import logger from "./logger";

export default (error: unknown): IHttpStatus => {
  if (error instanceof ApplicationValidationException)
    return {
      statusCode: 400,
      data: {
        name: error.name,
        message: error.message,
      },
    };

  if (error instanceof NotFoundExeption)
    return {
      statusCode: 404,
      data: {
        name: error.name,
        message: error.message,
      },
    };
  logger.error(JSON.stringify(error));
  return httpStatusServerError();
};
