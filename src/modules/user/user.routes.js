import express from 'express';
import { signUp, signIn, verify } from "./user.controller.js";
import { validation } from '../../middleware/validation.js';
import { signInSchema, signUpSchema } from './user.validation.js';
const userRoutes = express.Router();


userRoutes.post("/" , validation(signUpSchema)    , signUp)
userRoutes.post("/signin",  validation(signInSchema) , signIn);

userRoutes.get("/verify/:token", verify);
// api/v1/user/verify


// localhost:3000/api/v1/user/verify/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTEwNTQxODh9.KF7g5aPPSQ01ZRKMuaEEO_8pX4vQHvIbzBEaPyVX3-I

// http:
export default userRoutes;