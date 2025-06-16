const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");
const { authentication } = require("../middlewares/authentication");

router.post("/", authentication, ProductController.create);
router.get("/", ProductController.getAll);
router.get("/id/:id", ProductController.getById);
router.get("/name/:name", ProductController.getProductsByName);
router.get("/nameIndex/:nameIndex", ProductController.getProductsByNameIndex);
router.put("/id/:id", authentication, ProductController.update);
router.delete("/id/:id", authentication, ProductController.delete);

module.exports = router;
