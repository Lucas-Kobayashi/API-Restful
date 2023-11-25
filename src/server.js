const express = require("express");
// const path = require("path");

const db = require("./database");
const routes = require("./routes/index");

const app = express();

// Conexão com o banco de dados
db.connect();

// Habilita server para receber dados em JSON
app.use(express.json())

// Definindo as rotas
app.use("/api", routes);

// Executando o servidor
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server listening port ${port}`));