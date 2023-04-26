const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO users(username, password, role, email, address) 
            VALUES (?,?,?,?,?)`,
      [data.username, data.password, data.role, data.email, data.address],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUsers: (callBack) => {
    pool.query(`SELECT id,username,role,email,address FROM users`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getUserbyId: (id, callBack) => {
    pool.query(`SELECT id,username,role,email,address FROM users WHERE id = ?`,
    [id],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
  updateUser: (data, callBack) => {
    pool.query(
      `UPDATE users SET username=?, password=?, role=?, email=?, adresse=? where id=?`,
      [
        data.username,
        data.password,
        data.role,
        data.email,
        data.adresse,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `DELETE FROM users WHERE id = ?`,
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
