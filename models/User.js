import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name"],
    minlength: 5,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please enter the email"],
    validate: {
      validator: validator.isEmail,
      message: "Please enter a valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter the password"],
    minlength: 8,
  },
  lastName: {
    type: String,
    maxlength: 20,
    trim: true,
    default: "Last Name",
  },
  location: {
    type: String,
    maxlength: 20,
    trim: true,
    default: "My city",
  },
});

export default mongoose.model("User", UserSchema);
