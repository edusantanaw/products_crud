import { authPath, productByIdPath, productPath, userPath } from "./path";

export default {
  "/api/user": userPath,
  "/api/auth": authPath,
  "/api/product": productPath,
  "/api/product/{id}": productByIdPath,
};
