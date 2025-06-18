const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/keys");

const UserController = {
  async register(req, res) {
    try {
      const user = await User.create({ ...req.body, role: "user" });
      res.status(201).send({ message: "User registered successfully", user });
    } catch (error) {
      // console.error(error);
      // res.status(500).send({ message: "Error", error });
      error.origin = "usuario";
      next(error);
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

  async logout(req, res) {
    try {
      await User.findByIdAndUpdate(req.user._id, {
        $pull: { tokens: req.headers.authorization },
      });
      res.status(200).send({ message: `Goodbye ${req.user.name} !` });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was a problem trying to logout" });
    }
  },

  async getInfo(req, res) {
    try {
      const user = await User.findById(req.user._id)
        .populate({
          path: "orderIds",
          populate: {
            path: "productIds",
          },
        })
        .populate("wishList");
      res.status(200).send(user);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Error while retriving user data", error });
    }
  },
};

module.exports = UserController;
