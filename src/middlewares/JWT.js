const jwt = require("jsonwebtoken");
const SenhaJWT = require("../Security/SenhaJWT");
const { query } = require("../conexao");

const validadorJWT = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization || authorization === "Bearer") return res.status(404).json({ Mensagem: "Para acessar este recurso um token de autenticação válido deve ser enviado." });
    const token = authorization.split(" ")[1];
    const tokenIsValid = jwt.verify(token, SenhaJWT);

    const usuario = await query("select id,nome,email,nome_loja from usuarios where id = $1", [tokenIsValid.id]);

    if (!usuario) return res.status(404).json({ Mensagem: "Usuário não encontrado!" });

    req.usuario = usuario.rows[0];
    next();
  } catch (error) {
    if ((error.message = "jwt malformed")) return res.status(500).json({ Mensagem: "Token Invalido!" });
    if ((error.message = "jwt expired")) return res.status(500).json({ Mensagem: "Esse Token não é mais válido, gentileza, faça novamente o login!" });
    return res.status(500).json({ Mensagem: "Erro interno do servidor!" });
  }
};

module.exports = validadorJWT;
