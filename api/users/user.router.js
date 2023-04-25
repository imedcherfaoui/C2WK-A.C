const {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getUserbyId,
} = require("./user.controller");

const router = require("express").Router();

router.post("/register", createUser);
router.get("/users", getUsers);
router.put("/user", updateUser);
router.delete("/user", deleteUser);
router.get("/user/:id", getUserbyId);

module.exports = router;
