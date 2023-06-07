const mongoose = require("mongoose");

const connection = async () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/test");
  } catch (error) {
    console.log(error);
    throw new Error("Error en base de datos");
  }
};
