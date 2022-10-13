const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('../routes/users.routes');

class Server {
  #PORT;
  #ENDPOINT_PREFIX;
  #paths;

  constructor() {
    this.app = express();
    this.#PORT = process.env.PORT;
    this.#ENDPOINT_PREFIX = '/api';
    this.#paths = {
      usuarios: `${this.#ENDPOINT_PREFIX}/users`,
    };
        
    // Middlewares: functions tha are triggered when starting the server
    this.middlewares();

    this.routes();
  }
  
  middlewares() {
    // You should only configure middleware at the application level if absolutely necessary
    // i.e. it really must be run for every single route in your application.
    // Every middleware function, no matter how small, takes some time to execute.
    // The more middleware functions that need to be run for a route, the slower requests to that route will be.
    // This really adds up as your application grows and is configured with lots of middleware.
    // Try to scope middleware to the route or router levels when you can.

    this.app.use(cors());
    
    // middleware needed to read and parse payload requests
    this.app.use(express.json());
    
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.#paths.usuarios, userRoutes);
  }

  listen() {
    this.app.listen(this.#PORT, () => {
      console.log(`Server running on port: ${this.#PORT}`);
    });
  }
}

module.exports = Server;
