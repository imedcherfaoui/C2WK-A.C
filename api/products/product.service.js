const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO products(name, description, inspiration, fabric, image, price, category, sexe, stock, promo) VALUES (?,?,?,?,?,?,?,?,?,?)`,
      [data.name, data.description,data.inspiration, data.fabric, data.image, data.price, data.category, data.sexe, data.stock, data.promo, data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getProducts: (callBack) => {
    pool.query(`SELECT * FROM products`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getProductbyId: (id, callBack) => {
    pool.query(
      `SELECT * FROM products WHERE id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateProduct: (data, callBack) => {
    pool.query(
      `UPDATE products SET name=?, description=?, inspiration=?, fabric=?, image=?, price=?, category=?, sexe=?, stock=?, promo=? where id=?`,
      [data.name, data.description,data.inspiration, data.fabric, data.image, data.price, data.category, data.sexe, data.stock, data.promo, data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteProduct: (data, callBack) => {
    pool.query(
      `DELETE FROM products WHERE id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
