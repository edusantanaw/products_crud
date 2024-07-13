function httpStatus(code: number, body?: any) {
  return {
    statusCode: code,
    data: body,
  };
}

const httpStatusSuccess = (body?: any) => httpStatus(200, body);
const httpStatusCreated = (data?: any) => httpStatus(201, data);

export { httpStatus, httpStatusSuccess, httpStatusCreated };
