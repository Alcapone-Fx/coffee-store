class GeneralError extends Error {
  #BAD_REQUEST = 400;
  #NOT_FOUND = 404;
  #SERVER_ERROR = 500;

  constructor(message = '') {
    super();
    this.message = message;
  }

  getCode() {
    if (this instanceof BadRequest) {
      return this.#BAD_REQUEST;
    }
    
    if (this instanceof NotFound) {
      return this.#NOT_FOUND;
    }
    
    return this.#SERVER_ERROR;
  }
}

class BadRequest extends GeneralError {};
class NotFound extends GeneralError {};

module.exports = {
  GeneralError,
  BadRequest,
  NotFound
};