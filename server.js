// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const connectToMongo = require('./db');
connectToMongo();
const PORT = 3000;
app.use(express.json());
const cors = require('cors')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Homepage')
})

app.get('/register', (req, res) => {
  res.send('Register')
})

app.get('/login', (req, res) => {
  res.send('Login')
})

//Available Routes 
app.use('/auth', require('./routes/auth'));
app.use('/order', require('./routes/order'));
app.use('/dish', require('./routes/dish'));

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});