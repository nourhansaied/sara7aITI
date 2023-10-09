import express from "express";
import { addMessage, getMessages } from "./message.controller.js";
import { auth } from "../../middleware/auth.js";
import { validation } from "../../middleware/validation.js";
import { addMessageSchema } from "./message.validation.js";
const messageRoutes = express.Router();


messageRoutes.post("/", validation(addMessageSchema), addMessage);
messageRoutes.get("/",auth, getMessages);
export default messageRoutes;





