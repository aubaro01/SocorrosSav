const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 
const userRoutes = require('./routes/userRote'); 
const exerRoutes = require('./routes/exercRote'); 
const exUsRoutes = require('./routes/exerUsRote'); 
const cors = require('cors');

const app = express(); 

app.use(cors({
  origin: process.env.BASE_URL,
}));

app.use(express.json()); 

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

app.use('/api', userRoutes); 
app.use('/api', exerRoutes); 
app.use('/api', exUsRoutes); 

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API online!!' });
});

module.exports = (req, res) => {
  app(req, res);  
};
