import Joi from "joi";

const signInSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string()
    .pattern(/^[A-Z][a-z]{3,8}$/)
    .required(),
});


const signUpSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .email({ tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string()
    .pattern(/^[A-Z][a-z]{3,8}$/)
    .required(),
  rePassword: Joi.ref("password"),

});


export {
    signInSchema,
    signUpSchema
}