const {
  create,
  getUsers,
  updateUser,
  deleteUser,
  getUserbyId,
  getUserbyEmail,
} = require("./user.service");

const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    //Password Encryption with bcrypt package
    //The salt for the password encryption
    const salt = genSaltSync(10);
    //Password encryption
    body.password = hashSync(body.password, salt);

    const username = body.username;
    const password = body.password;
    const role = body.role;
    const email = body.email;
    const address = body.address;

    create(body, (err, results) => {
      if (err) {
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
  getUsers: (req, res) => {
    getUsers((err, results) => {
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
  getUserbyId: (req, res) => {
    const id = req.params.id;
    getUserbyId(id, (error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "User not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);

    updateUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update user.",
        });
      }
      return res.json({
        success: 1,
        message: "Updated successfully",
      });
    });
  },
  deleteUser: (req, res) => {
    const data = req.body;
    deleteUser(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "User not found.",
        });
      }
      return res.json({
        success: 1,
        message: "User Deleted successfully.",
      });
    });
  },
  login: (req, res) => {
    const body = req.body;

    const email = body.email;
    const password = body.password;

    getUserbyEmail(body.email, (err, results) => {
      if (err) {
        console.log(err);
      } 
      if (!results) {
        return res.json({
          success: 0,
          data: "Invalid email or password"
        });
      }
      const result = compareSync(body.password, results.password);
      if (result) {
        results.password = undefined;
        const jsontoken = sign({result: results}, "qwe1234", {
          expiresIn: "1h"
        });
        return res.json({
          success: 1,
          message: "login successfully",
          token: jsontoken
        });
      } else {
        return res.json({
          success: 0,
          data: "Invalid email or password"
        });
      }
    });
  },
};
