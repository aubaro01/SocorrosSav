const UserExerc = require('../models/ExerUs');
const User = require('../models/user');
const exerc = require('../models/exerc'); 

const createUserExerc = async (req, res) => {
  try {
    const { nome, Circuito, id_Exer_fk, exer_res } = req.body;

    const user = await User.findOne({ nome });
    if (!user) {
      return res.status(400).json({ message: 'Utilizador não encontrado.' });
    }

    if (user.circuito !== Circuito) {
      return res.status(400).json({ message: 'Senha incorreta.' });
    }

    const exercicio = await exerc.findById(id_Exer_fk);
    if (!exercicio) {
      return res.status(400).json({ message: 'Exercício não encontrado.' });
    }

    const existingUserExerc = await UserExerc.findOne({ id_Exer_fk, id_User_fk: user._id });
    if (existingUserExerc) {
      return res.status(400).json({ message: 'Esse exercício já foi registrado para esse utilizador.' });
    }

    const newUserExerc = new UserExerc({
      id_Exer_fk,
      id_User_fk: user._id,
      exer_res,
    });

    const savedUserExerc = await newUserExerc.save();
    res.status(201).json(savedUserExerc);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const exers = await UserExerc.find(); 
    res.status(200).json(exers);  
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUserExerc,
  getAll
};
