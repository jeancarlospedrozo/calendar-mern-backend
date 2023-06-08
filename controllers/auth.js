const { response } = require("express");
const User = require("../models/User");

const createUser = async (req, res = response) => {
  // const { name, email, password } = req.body;

  try {
    const user = new User(req.body);
    await user.save();

    res.status(201).json({
      ok: true,
      // name,
      // email,
      // password,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Contactese con el administrador",
    });
  }
};

const loginUser = (req, res = response) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
    email,
    password,
  });
};

const revalidateToken = (req, res) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = {
  createUser,
  loginUser,
  revalidateToken,
};
