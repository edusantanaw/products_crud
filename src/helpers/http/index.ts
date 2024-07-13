function httpStatus(code: number, body?: any) {
  return {
    statusCode: code,
    data: body,
  };
}

const httpStatusSuccess = (body?: any) => httpStatus(200, body);
const httpStatusCreated = (data?: any) => httpStatus(201, data);
const httpStatusServerError = () => httpStatus(500, "Internal Server Error!");

export { httpStatus, httpStatusSuccess, httpStatusCreated, httpStatusServerError };
