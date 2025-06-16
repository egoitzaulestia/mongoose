const User = require("../models/User");

const UserController = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(201).send({ message: "User registered successfully", user });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error", error });
    }
  },
};

module.exports = UserController;
