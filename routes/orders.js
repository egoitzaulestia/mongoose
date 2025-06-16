const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");
const { authentication } = require("../middlewares/authentication");

router.post("/", authentication, OrderController.create);
router.put("/:_id", authentication, OrderController.update);

module.exports = router;
