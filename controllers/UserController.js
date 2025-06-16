const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/keys");

const UserController = {
  async register(req, res) {
    try {
      const user = await User.create({ ...req.body, role: "user" });
      res.status(201).send({ message: "User registered successfully", user });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error", error });
    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({
        email: req.body.email,
      });

      const token = jwt.sign({ _id: user._id }, jwt_secret, {
        expiresIn: "7d",
      });

      if (user.tokens.length > 3) user.tokens.shift();

      user.tokens.push(token);
      await user.save();

      res.status(200).send({ message: `Welcome ${user.name}`, token });
    } catch (error) {
      console.error;
      res.status(500).send({ message: "Error", error });
    }
  },
};

module.exports = UserController;
