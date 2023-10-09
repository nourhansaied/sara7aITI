import { AppError } from "./AppError.js";




export const catchAsyncError = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      // res.json({ message: "err from sara7a", err });
      next(new AppError(err , 400));
    });
  };
};


