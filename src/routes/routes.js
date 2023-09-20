const express = require("express");
const usuarios = require("./usuariosRotas");
const produtos = require("./produtosRotas");
const routes = express.Router();

routes.use("/produtos", produtos);
routes.use("/usuario", usuarios);
routes.use((req, res, next) => {
  res.status(404).json({ Mensagem: "Página não encontrada" });
});

module.exports = routes;
