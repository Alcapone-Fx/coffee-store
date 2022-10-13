const { GeneralError } = require('../utils/errors.utils');

// Error-handling middleware always takes four arguments.
// You must provide four arguments to identify it as an error-handling middleware function.
// Even if you don’t need to use the next object, you must specify it to maintain the signature.
// Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.
const handleErrors = (err, req, res, next) => {
  if (err instanceof GeneralError) {
    return res.status(err.getCode()).json({
      status: 'error',
      message: err.message
    });
  }
  // passing to the next middleware
  next(err);
};

module.exports = handleErrors;
