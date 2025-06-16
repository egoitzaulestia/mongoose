const Order = require("../models/Order");

const OrderController = {
  async create(req, res) {
    try {
      const order = await Order.create({
        ...req.body,
        status: "pending",
        deliveryDate: new Date().setDate(new Date().getDate() + 2),
        userId: req.user._id,
      });
      res.status(201).send({ message: "Order created successfully", order });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error", error });
    }
  },

  async update(req, res) {
    try {
      const order = await Order.findByIdAndUpdate(
        req.params._id,
        { ...req.body, userId: req.user._id },
        { new: true }
      );
      res.send({ message: "Order updated successfully", order });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error", error });
    }
  },
};

module.exports = OrderController;
