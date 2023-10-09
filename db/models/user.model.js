import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [3, "name is too short"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      minLength: [3, "name is too short"],
      required: true,
    },
    gender: String,
    verified: {
        type: Boolean,
        default:false
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema)







export default userModel;