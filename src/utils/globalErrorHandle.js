


export const globalErrorHandle = (err, req, res, next) => {
      let code = err.statusCode || 500;

      process.env.MODE == "dev"
        ? res.status(code).json({ message: "err from global error", error: err.message, stack: err.stack })
        : res.status(code).json({ message: "err from global error", error: err.message });
    };
