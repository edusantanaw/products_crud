import { DeleteAllProductsController } from "../../../../controllers/product/deleteAllProducts";
import { deleteProductUsecaseFactory } from "../../usecases/product/delete";
import { loadAllProductsUsecaseFactory } from "../../usecases/product/loadAll";

export function deleteAllProductsControllerFactory() {
  const loadAllProductsUsecae = loadAllProductsUsecaseFactory();
  const deleteProductUsecase = deleteProductUsecaseFactory();
  return new DeleteAllProductsController(
    loadAllProductsUsecae,
    deleteProductUsecase
  );
}
