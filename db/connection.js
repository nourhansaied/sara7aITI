import mongoose from 'mongoose';

export const connection = () => {
    mongoose
      .connect("mongodb+srv://test123:test123@cluster0.unaj4ao.mongodb.net/sara7aApp")
      .then(() => console.log("DB connected"))
      .catch((err) => console.log("DB error", err));

}


// then ,,,catch

// try ....catch