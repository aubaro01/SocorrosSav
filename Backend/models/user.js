const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true, 
    },
    circuito: {
      type: String,
      required: true, 
    },
    mensagem: {
      type: String,
      required: true,
  },
  {
    timestamps: true, 
  }
);

const User = mongoose.model('user', userSchema);

module.exports = User;
