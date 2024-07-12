import express from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/productController";

const router = express.Router();

router.get("/products", getProducts);
router.post("/products", addProduct);
router.get("/product/:id", getProduct);
router.delete("/product/:id", deleteProduct);
router.put("/product/:id", updateProduct);

export default router;
