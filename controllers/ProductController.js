const Product = require("../models/Product");

const ProductController = {
  async create(req, res) {
    try {
      const product = await Product.create(req.body);
      res.status(201).send({
        message: "Product created successfully",
        product,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "It has been an error while creating the product",
        error,
      });
    }
  },

  async getAll(req, res) {
    try {
      const products = await Product.find();
      res.status(200).send(products);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was an error", error });
    }
  },
};

module.exports = ProductController;
