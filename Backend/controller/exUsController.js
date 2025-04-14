const UserExerc = require('../models/ExerUs');
const User = require('../models/user');
const exerc = require('../models/exerc');

const createUserExerc = async (req, res) => {
  try {
    const { nome, circuito, id_Exer_fk, exer_res } = req.body;

    const user = await User.findOne({ nome });
    if (!user) {
      return res.status(400).json({ message: 'Utilizador não encontrado.' });
    }

    if (user.circuito !== circuito) {
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

const getUserExerciseCount = async (req, res) => {
  try {
    const exercCount = await UserExerc.aggregate([
      {
        $group: {
          _id: '$id_User_fk',
          totalExercicios: { $sum: 1 }
        }
      },
      {
        $lookup: {
          from: 'users',
          localField: '_id',
          foreignField: '_id',
          as: 'userInfo'
        }
      },
      { $unwind: '$userInfo' },
      {
        $project: {
          _id: 0,
          totalExercicios: 1,
          nome: {
            $toUpper: { $trim: { input: '$userInfo.nome' } }
          }
        }
      },
      {
        $sort: { nome: 1 }
      }
    ]);
    const cleanMap = new Map();

    for (const user of exercCount) {
      const nome = user.nome;
      if (cleanMap.has(nome)) {
        cleanMap.set(nome, cleanMap.get(nome) + user.totalExercicios);
      } else {
        cleanMap.set(nome, user.totalExercicios);
      }
    }

    const result = Array.from(cleanMap, ([nome, totalExercicios]) => ({
      nome,
      totalExercicios
    }));

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
  getAll,
  getUserExerciseCount
};
