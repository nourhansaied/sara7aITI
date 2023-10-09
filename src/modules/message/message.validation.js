import Joi from "joi";

export const addMessageSchema = Joi.object({
  body: {
    messageContent: Joi.string().min(3).max(300).required(),
    receivedId: Joi.string().hex().length(24).required(),
    },
    params: {

    },
    query: {
        
    }
});

