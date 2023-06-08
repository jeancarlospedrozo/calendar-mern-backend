const express = require("express");
const dbConnection = require("./database/config");
require("dotenv").config();

const app = express();

dbConnection();

app.use(express.static("public"));

//Lectura y parseo del body
app.use(express.json());

//Routes
app.use("/api/auth", require("./routes/auth"));

app.listen(process.env.PORT, () => {
  console.log(`server corriendo en el puerto ${process.env.PORT}`);
});
