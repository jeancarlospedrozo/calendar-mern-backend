const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.static("public"));

//Lectura y parseo del body
app.use(express.json());

//Routes
app.use("/api/auth", require("./routes/auth"));

app.listen(process.env.PORT, () => {
  console.log(`server corriendo en el puerto ${process.env.PORT}`);
});
