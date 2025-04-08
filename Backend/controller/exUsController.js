const UserExerc = require('../models/ExerUs');
const User = require('../models/user');  

const createUserExerc = async (req, res) => {
  try {
    const { nome, Pass, id_Exer_fk, exer_res } = req.body;

    const user = await User.findOne({ nome });  
    if (!user) {
      return res.status(400).json({ message: 'Utilizador não encontrado.' });
    }

    if (user.Pass !== Pass) {
      return res.status(400).json({ message: 'Senha incorreta.' });
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

module.exports = {
  createUserExerc,
};