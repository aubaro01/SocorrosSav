const User = require('../models/user'); 

const createUser = async (req, res) => {
  try {
    const { nome, circuito, mensagem } = req.body;

    if (!nome || !circuito || !mensagem) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    const existingUser = await User.findOne({ nome, circuito });

    if (existingUser) {
      return res.status(400).json({ message: 'Já existe um utilizador com esse nome e circuito.' });
    }

    const newUser = new User({
      nome,
      circuito,
      mensagem,
    });

    const savedUser = await newUser.save();

    res.status(201).json({ nome: savedUser.nome, circuito: savedUser.circuito, mensagem: savedUser.mensagem });
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
      mensagem: user.mensagem,
    }));

    res.status(200).json(usersWithoutPassword);
  } catch (error) {
    console.error('Erro ao obter os utilizadores:', error);
    res.status(500).json({ message: `Erro interno do servidor: ${error.message}` });
  }
};

module.exports = {
  createUser,
  getAllUsers,
};

