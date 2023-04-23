//Cacher les informations liées à la BDD
require("dotenv").config();
//Installation d'express
const express = require("express");
const app = express();
//Import user Router
const userRouter = require("./api/users/user.router");

//Gérer les données des requettes HTTP
app.use(express.json());

app.use("/", userRouter);
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running !");
});
