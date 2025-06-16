const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { jwt_token } = require("../config/keys");

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

  async login(req, res) {
    const user = await User.findOne({
      email: req.body.email,
    });

    const token = jwt.sign({ _id: user._id, jwt_token });

    if (user.tokens.length > 3) user.tokens.shift();

    user.tokens.push(token);
    await user.save();

    res.status(200).send({ message: `Welcome ${user.name}`, token });
  },
};

module.exports = UserController;
