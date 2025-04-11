const Exer = require('../models/exerc'); 


const createExer = async (req, res) => {
  try {
    const { exerc_nome } = req.body;


    const existingExer = await Exer.findOne({ exerc_nome });
    if (existingExer) {
      return res.status(400).json({ message: "Exercício já existe!" });
    }

    const newExer = new Exer({ exerc_nome });
    const savedExer = await newExer.save();  

    res.status(201).json(savedExer);  
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllExers = async (req, res) => {
  try {
    const exers = await Exer.find(); 
    res.status(200).json(exers);  
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getExerByName = async (req, res) => {
  try {
    const { nome } = req.params;

    const exer = await Exer.findOne({
      where: { nome }, 
      attributes: ["id", "nome"] 
    });

    if (!exer) {
      return res.status(404).json({ message: "Exercício não encontrado!" });
    }

    res.status(200).json(exer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {
  createExer,
  getAllExers,
  getExerByName,  
};