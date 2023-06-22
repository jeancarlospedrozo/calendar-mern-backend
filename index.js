const express = require("express");
const dbConnection = require("./database/config");
const cors = require("cors");
require("dotenv").config();

const app = express();

dbConnection();

app.use(cors());

app.use(express.static("public"));

//Lectura y parseo del body
app.use(express.json());

//Routes
app.use("/api/auth", require("./routes/auth"));

app.listen(process.env.PORT, () => {
  console.log(`server corriendo en el puerto ${process.env.PORT}`);
});
