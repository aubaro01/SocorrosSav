const mongoose = require("mongoose");

const ExerSchema = new mongoose.Schema({
  exerc_nome: {
    type: String,
    required: true, 
    unique: true,  
  }
},
); 

const Exer = mongoose.model('Exer', ExerSchema);

module.exports = Exer;

