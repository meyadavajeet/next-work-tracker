import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      required: [true, "Email Required!!"],
    },
    password: {
      type: String,
      required: [true, "Password Required!!"],
    },
    about: String,
    profileURL: String,
  },
  {
    timestamps: true,
  }
);

// mongoose.models = {};
const UserModel = mongoose.models.users || mongoose.model("users", userSchema);

export default UserModel;
