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
      // Pagination method
      const { page = 1, limit = 10 } = req.query;

      const products = await Product.find()
        .populate("reviews.userId")
        .limit(limit)
        .skip((page - 1) * limit);

      res.status(200).send(products);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was an error", error });
    }
  },

  async getById(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).send(product);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error", error });
    }
  },

  async getProductsByName(req, res) {
    try {
      if (req.params.name.length > 20) {
        return res.status(400).send({ message: "Too long search" });
      }
      const name = new RegExp(req.params.name, "i");
      const products = await Product.find({ name });
      res.status(200).send(products);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error", error });
    }
  },

  async getProductsByNameIndex(req, res) {
    try {
      const products = await Product.find({
        $text: {
          $search: `"${req.params.nameIndex}"`,
        },
      });
      res.status(200).send(products);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error", error });
    }
  },

  async delete(req, res) {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      res.status(200).send({ message: "Product deleted", product });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "There was an error trying to remove the product",
        error,
      });
    }
  },

  async update(req, res) {
    try {
      const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
          $inc: { __v: 1 },
        },
        { new: true }
      );
      res.status(200).send({
        message: "Product successfully updated",
        product,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error", error });
    }
  },

  async insertComment(req, res) {
    try {
      const product = await Product.findByIdAndUpdate(
        req.params._id,
        {
          $push: {
            reviews: { userId: req.user._id, comment: req.body.comment },
          },
        },
        { new: true }
      );
      res
        .status(201)
        .send({ message: "Comment created successfully", product });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "There was a problem with your review", error });
    }
  },
};

module.exports = ProductController;
