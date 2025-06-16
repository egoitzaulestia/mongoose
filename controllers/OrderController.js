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
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error", error });
    }
  },
};

module.exports = OrderController;
