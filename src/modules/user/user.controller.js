
import userModel from '../../../db/models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { sendEmail } from '../../email/sendEmail.js';
import { catchAsyncError } from '../../utils/catchAsyncError.js';
import { AppError } from '../../utils/AppError.js';
import Joi from 'joi'
// x ... function


export const signUp =
  // catchAsyncError(
  async (req, res, next) => {
    let { name, email, password,rePassword, gender } = req.body;
      let foundedUser = await userModel.findOne({ email });
      if (foundedUser) {
        // res.json({ message: "Already register" });
        next(new AppError("Already register" , 409));
      } else {
        let hashedPassword = bcrypt.hashSync(password, Number(process.env.SALTROUNDS));
        let added = await userModel.insertMany({ name, email, password: hashedPassword });
        let token = jwt.sign({ id: added[0]._id, name: added.name }, process.env.SECRET_KEY_VERIFY);
        console.log(token);
        // sendEmail({ email, token });
        res.status(201).json({ message: "Added", added });
      }
  }
// );

export const signIn = catchAsyncError(async (req, res,next) => {
  let { email, password } = req.body;

    let foundedUser = await userModel.findOne({ email });
    if (foundedUser ) {
      let matched = bcrypt.compareSync(password, foundedUser.password);
      if (matched) {
        let token = jwt.sign({ id: foundedUser._id, name: foundedUser.name }, process.env.SECRET_KEY);
        res.status(200).json({ message: "welcome", token });
      } else {
        // res.json({ message: "password wrong" });
        next(new AppError("password wrong", 422));
      }
    } else {
      // res.json({ message: "email wrong or u have to register first or verify ur email" });
      next(new AppError("email wrong or u have to register first or verify ur email", 422));
    }
  
  
})


export const verify =catchAsyncError( (req, res) => {
  let { token } = req.params;
  jwt.verify(token, process.env.SECRET_KEY_VERIFY, async (err, decoded) => {
    if(err) next(new AppError("invalid token", 400));
    let updatedUser = await userModel.findByIdAndUpdate(decoded.id, { verified: true }, { new: true });
    res.json({ message: "Success", updatedUser });
  });

})



// error handling





















