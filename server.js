//Définition des modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

//Connexion à la base de donnée
mongoose.connect('mongodb://localhost:27017/db', { useNewUrlParser: true })
  .then( () => {
    app.listen(5000, () => {
      console.log('mongoose : ok, server: ok, port: 5000')
    })
  })


//On définit notre objet express nommé app

//Body Parser
/*
const urlencodedParser = bodyParser.urlencoded({
  extended: true
});
*/
//app.use(urlencodedParser);

//app.use(bodyParser.json());

//Définition des CORS
/*
app.use(function(req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
*/
//Définition du routeur
//const router = express.Router();
app.get( "/user", ( req, res ) => {
  res.send('root API')
});
//require(__dirname + "/controllers/userController")(router);

//Définition et mise en place du port d'écoute
const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));