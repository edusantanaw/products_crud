import { randomUUID } from "crypto";
import ProductModel from "../src/infra/entities/product";
import { db } from "../src/main/config";

test("should create a new product", async () => {
  await db()
  const product = await ProductModel.create({
    id: randomUUID(),
    name: "eduardo",
    description: "test",
    price: 200.0,
  });
  await product.save();
  const prod = product.dataValues;
  expect(prod.name).toBe("eduardo");
});
