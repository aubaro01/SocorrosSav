const User = require('../models/user'); 

const createUser = async (req, res) => {
  try {
    const { nome, circuito } = req.body;
    if (!nome || !circuito ) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    const existingUser = await User.findOne({ nome, circuito });

    if (existingUser) {
      return res.status(400).json({ message: 'Já existe um usuário com esse nome, circuito e senha.' });
    }

    const newUser = new User({
      nome,
      circuito,
    });

    const savedUser = await newUser.save();

    res.status(201).json({ nome: savedUser.nome, circuito: savedUser.circuito });
  } catch (error) {
    console.error('Erro ao criar o utilizador:', error);
    res.status(500).json({ message: `Erro interno do servidor: ${error.message}` });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    const usersWithoutPassword = users.map(user => ({
      nome: user.nome,
      circuito: user.circuito,
    }));

    res.status(200).json(usersWithoutPassword);
  } catch (error) {
    console.error('Erro ao obter os usuários:', error);
    res.status(500).json({ message: `Erro interno do servidor: ${error.message}` });
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
