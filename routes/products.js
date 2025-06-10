const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.post("/", ProductController.create);
router.get("/", ProductController.getAll);
router.get("/id/:id", ProductController.getById);
router.get("/name/:name", ProductController.getProductsByName);
router.get("/nameIndex/:nameIndex", ProductController.getProductsByNameIndex);
router.put("/id/:id", ProductController.update);
router.delete("/id/:id", ProductController.delete);

module.exports = router;
