import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { badRequestError } from "../errors/allErrors.js";

const register = async (req, res) => {
  //req.body contains all details because of express.json()
  const { name, email, password } = req.body;

  if (!email || !name || !password) {
    throw new badRequestError("Please enter all the details");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new badRequestError("Email is already registered");
  }
  const user = await User.create({ name, email, password });
  res.status(StatusCodes.OK).json({ user });
};

const login = async (req, res) => {
  res.send("login user");
};

const updateUser = async (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
