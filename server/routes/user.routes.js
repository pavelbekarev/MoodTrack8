const Router = require("express");
// const Set = require("../models/User");
const userController = require("../controllers/userController");

const router = new Router();

router.post("/createUser", userController.createUser);
router.get("/getUsers", userController.getUsers);

module.exports = router;