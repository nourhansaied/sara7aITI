


let types = ['body', 'params','query','headers']

export function validation(schema) {

  return (req, res, next) => {
      
    let errrArry = []
    types.forEach((ele) => {
      if (schema[ele]) {
        let { error } = schema[ele].validate(req[ele], { abortEarly: false });

        if (error) {
          errrArry.push("asdasd")
          // res.json({ message: "Asd", res: error.details });
        } else {
          // next();
        }
      }
        
    })

    if (errrArry.length) {
      res.json({message:"Asd"})
    } else {
      next()
    }
     
    }



}



