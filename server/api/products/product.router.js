const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProductbyId,
} = require("./product.controller");

const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/create", createProduct);
router.get("/products", getProducts);
router.put("/product", checkToken, updateProduct);
router.delete("/product", checkToken, deleteProduct);
router.get("/product/:id", getProductbyId);

module.exports = router;
