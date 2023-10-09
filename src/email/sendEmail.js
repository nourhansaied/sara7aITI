import nodemailer from 'nodemailer'
import { emailTemplate } from './emailtemplate.js';


export async function sendEmail(options) {
const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: process.env.EMAIL_TEXT,
    pass: process.env.EMAIL_PASSOWRD,
  },
});
    
    console.log(options.token);
    
      const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <routecairo@outlook.com>', // sender address
        to: options.email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: emailTemplate(options.token),
      });

  console.log("Message sent: %s", info.messageId);
}














