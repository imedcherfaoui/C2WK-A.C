const {
  create,
  getProducts,
  updateProduct,
  deleteProduct,
  getProductbyId,
} = require("./product.service");

module.exports = {
  createProduct: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getProducts: (req, res) => {
    getProducts((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getProductbyId: (req, res) => {
    const id = req.params.id;
    getProductbyId(id, (error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Product not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateProduct: (req, res) => {
    const body = req.body;
    updateProduct(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update product.",
        });
      }
      return res.json({
        success: 1,
        message: "Updated successfully",
      });
    });
  },
  deleteProduct: (req, res) => {
    const data = req.body;
    deleteProduct(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Product not found.",
        });
      }
      return res.json({
        success: 1,
        message: "Product Deleted successfully.",
      });
    });
  },
};
