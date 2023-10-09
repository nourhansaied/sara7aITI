import dotenv from 'dotenv';
dotenv.config({})


import express from 'express'
import { connection } from './db/connection.js'
import messageRoutes from './src/modules/message/message.routes.js'
import userRoutes from './src/modules/user/user.routes.js';
import { AppError } from './src/utils/AppError.js';
import { globalErrorHandle } from './src/utils/globalErrorHandle.js';
import cors from 'cors'
const app = express()
app.use(express.json())
const port = 3000
app.use(
  cors({
    origin: "*",
  })
);
connection()
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/message", messageRoutes);

app.get('/', (req, res) => res.send('Hello World!'))


app.all("*", (req, res, next) => {
    // res.json({ message: `Not found ${req.originalUrl}` });
   
    // next( new Error(`Not found ${req.originalUrl}`));
    next(new AppError(`Not found ${req.originalUrl}`,404));
})


// Global error handling
app.use(globalErrorHandle)









app.listen(port, () => console.log(`Example app listening on port ${port}!`))