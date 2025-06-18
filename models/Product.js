const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

// sub-schema for reviews
const RevieSchema = new mongoose.Schema(
  {
    userId: { type: ObjectId, ref: "User" },
    comment: String,
  },
  { timestamps: true }
);

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    reviews: [
      RevieSchema, // We pass the sub-schema for reviews
    ],
    likes: [{ type: ObjectId }],
  },
  { timestamps: true } // timestamps of the product
);

ProductSchema.index({
  name: "text",
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
