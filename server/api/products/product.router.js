const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProductbyId,
} = require("./product.controller");

const router = require("express").Router();

router.post("/create", createProduct);
router.get("/products", getProducts);
router.put("/product", updateProduct);
router.delete("/product", deleteProduct);
router.get("/product/:id", getProductbyId);

module.exports = router;
