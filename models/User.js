const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    age: Number,
    tokens: [],
    role: String,
    orderIds: [{ type: ObjectId, ref: "Order" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
