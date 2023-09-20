const express = require("express");
const { listarProdutos, detalharProdutos, cadastrarProdutos, atualizarProdutos, deletarProdutos } = require("../controllers/produtosController");
const validadorJWT = require("../middlewares/JWT");
const produtos = express.Router();
// 200 (OK) = requisição bem sucedida
// 201 (Created) = requisição bem sucedida e algo foi criado
// 204 (No Content) = requisição bem sucedida, sem conteúdo no corpo da resposta
// 400 (Bad Request) = o servidor não entendeu a requisição pois está com uma sintaxe/formato inválido
// 401 (Unauthorized) = o usuário não está autenticado (logado)
// 403 (Forbidden) = o usuário não tem permissão de acessar o recurso solicitado
// 404 (Not Found) = o servidor não pode encontrar o recurso solicitado

produtos.use(validadorJWT);
// Trazer produtos
produtos.get("/", listarProdutos);
// Detalhar um produto do usuario logado
produtos.get("/:id", detalharProdutos);
// Cadastrar produtos para o usuario logado
produtos.post("/", cadastrarProdutos);
// Atualizar Produtos do usuario logado
produtos.put("/:id", atualizarProdutos);
// Excluir Produtos do usuario logado
produtos.delete("/:id", deletarProdutos);

module.exports = produtos;
