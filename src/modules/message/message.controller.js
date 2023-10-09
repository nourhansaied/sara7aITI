import Joi from "joi";
import messageModel from "../../../db/models/message.model.js";
import userModel from "../../../db/models/user.model.js";
import { AppError } from "../../utils/AppError.js";
import { catchAsyncError } from "../../utils/catchAsyncError.js";



export const addMessage = catchAsyncError(async (req, res,next) => {
  let { messageContent, receivedId } = req.body;
      let existUser = await userModel.findById(receivedId);
      if (existUser) {
        let addedMessage = await messageModel.insertMany({ messageContent, receivedId });
        res.status(201).json({ messaged: "Added", addedMessage });
      } else {
        // res.json({ messaged: "User not found" });
        next(new AppError("User not found", 404));
      }

 
})

export const getMessages = catchAsyncError(async (req, res) => {
  let allMessages = await messageModel.find({ receivedId: req.userId });
  res.json({ message: "Done", allMessages });
})






