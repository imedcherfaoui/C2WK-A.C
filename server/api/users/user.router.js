const {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getUserbyId,
  login
} = require("./user.controller");

const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/register", checkToken, createUser);
router.get("/users", checkToken, getUsers);
router.put("/user", checkToken, updateUser);
router.delete("/user", checkToken, deleteUser);
router.get("/user/:id", checkToken, getUserbyId);
router.post("/login", login);

module.exports = router;
