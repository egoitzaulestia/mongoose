const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");
const { authentication, isAdmin } = require("../middlewares/authentication");

router.post("/", authentication, isAdmin, ProductController.create);
router.get("/", ProductController.getAll);
router.get("/id/:id", ProductController.getById);
router.get("/name/:name", ProductController.getProductsByName);
router.get("/nameIndex/:nameIndex", ProductController.getProductsByNameIndex);
router.put("/id/:id", authentication, isAdmin, ProductController.update);
router.delete("/id/:id", authentication, isAdmin, ProductController.delete);
router.put("/reviews/:_id", authentication, ProductController.insertComment);

module.exports = router;
