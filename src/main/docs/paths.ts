import {
  authPath,
  productByIdPath,
  productPath,
  productRandomPath,
  userPath,
} from "./path";
import productAllPath from "./path/productAllPath";

export default {
  "/api/user": userPath,
  "/api/auth": authPath,
  "/api/product": productPath,
  "/api/product/random": productRandomPath,
  "/api/product/all": productAllPath,
  "/api/product/{id}": productByIdPath,
};
