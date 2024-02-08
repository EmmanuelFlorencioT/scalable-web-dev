const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

class Server {
  constructor() {
    // Here lies all the information about the server
    // we will use for all incoming requests.
    this.app = express();
    this.port = process.env.PORT;
    this.connection_string = process.env.CONNECTION_STRING;

    this.userPath = "/api/users";
    this.productPath = "/api/products";
    this.moviePath = "/api/movies";
    this.spaceshipPath = "/api/spaceships";
    this.locationPath = "/api/locations";
    
    this.middlewares();
    this.routes();
    this.db();
  }
  
  middlewares() {
    //Specify that the server will receive data in JSON format
    this.app.use(express.json());
  
    //Define domains that the server will only have access to
    this.app.use(cors());
  }

  //This method will define the routes of the server
  routes() {
    this.app.use(this.userPath, require("../routes/users"));
    this.app.use(this.productPath, require("../routes/products"));
    this.app.use(this.moviePath, require("../routes/movies"));
    this.app.use(this.spaceshipPath, require("../routes/spaceships"));
    this.app.use(this.locationPath, require("../routes/locations"));
    
    /* ---- */
    // Stablish a route with the GET method.
    /* Parameters:
    ('/name-of-route', 
    anonymous function that will handle request and response.)
    */
    //This route should be defined at the END
    this.app.get("*", (req, res) => {
      res.status(404).send("Error - Route not found!");
    });

  }

  db(){
    mongoose.connect(this.connection_string).then(
      () => {
        console.log('Connection successful!');
      }
    ).catch(
      (error) => {
        console.log('There was an error on db connection' + error);
      }
    )
  }

  //This method will make sure the server starts listening
  listen() {
    // Stablish the port that our server will be listening from.
    // Stablish the function that the port will execute on startup.
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}

module.exports = Server;
