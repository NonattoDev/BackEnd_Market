const express = require("express");
const usuarios = express.Router();
const validadorJWT = require("../middlewares/JWT");
const { cadastrarUsuario, loginUsuario, mostrarUsuarios, atualizarUsuario } = require("../controllers/usuariosController");

// Cadastrar usuario
usuarios.post("/", cadastrarUsuario);
// Logar
usuarios.post("/login", loginUsuario);

//Middleware Verificador de Token JWT
usuarios.use(validadorJWT);
// Trazer usuario
usuarios.get("/", mostrarUsuarios);
// Atualizar Usuario
usuarios.put("/", atualizarUsuario);

module.exports = usuarios;
