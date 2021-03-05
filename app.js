// le front end consome l'appi de backend en envoyant des requette 
//backend recoit de requuette a parti de front end : request (req) et retourne des response (res)
//le requette est composé de : method et chemin 
// methods : GET , POST , PUT , DELETE
//chemin : '/produit/list' , '/produit/ajouter'o
const express = require('express');
const app = express();
const mongoose=require('mongoose');
const ContactModel = require ('./Models/Contact');
const port = 80
const cors = require('cors');
app.use(cors());
// imposeer que chaque entre a l'api est sus format jason 
app.use(express.json());
const contactroute = require ('./Routes/contact.js')
app.use('/contact/',contactroute);
//chemin racine 
app.get('/', (req, res) => {
  res.send('bienvenu')
})
// connect to database 
mongoose.connect('mongodb://127.0.0.1:27017/merdb',{
  useNewUrlParser:true,
})
//tester la connexion
const db =mongoose.connection;
db.on('error',console.error.bind(console,'connection failed '))
db.on('open',function() {
  console.log('connection succesfully')
})
db.on('open',function() {
  console.log('connection succesfully')
})
//execution de l'application 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})