import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    messageContent: {
      type: String,
      required: true,
      minLength:[3,"message is too short"]
    },
    receivedId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const messageModel = mongoose.model("Message", messageSchema);





export default messageModel;