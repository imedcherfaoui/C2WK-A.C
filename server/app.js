//Cacher les informations liées à la BDD
require("dotenv").config();
//Installation d'express
const express = require("express");
const cors = require('cors');
const app = express();
//Import Router
const userRouter = require("./api/users/user.router");
const productRouter = require("./api/products/product.router");

//Gérer les données des requettes HTTP
app.use(express.json());

//Gérer les CORS
app.use(cors());

//Gérer les routes
app.use("/", [userRouter, productRouter]);

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running !");
});
