const { query } = require("../conexao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SenhaJWT = require("../Security/SenhaJWT");

// 200 (OK) = requisição bem sucedida
// 201 (Created) = requisição bem sucedida e algo foi criado
// 204 (No Content) = requisição bem sucedida, sem conteúdo no corpo da resposta
// 400 (Bad Request) = o servidor não entendeu a requisição pois está com uma sintaxe/formato inválido
// 401 (Unauthorized) = o usuário não está autenticado (logado)
// 403 (Forbidden) = o usuário não tem permissão de acessar o recurso solicitado
// 404 (Not Found) = o servidor não pode encontrar o recurso solicitado

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha, nome_loja } = req.body;
  if (!nome || !email || !senha || !nome_loja) {
    return res.status(401).json({ Mensagem: "Informe todos os dados!" });
  }

  try {
    const emailExists = await query("select * from usuarios where email= $1", [email.trim()]);
    if (emailExists.rows.length > 0) return res.status(400).json({ Mensagem: "Email já cadastrado no sistema." });

    const senhaCriptografada = await bcrypt.hash(senha.trim(), 10);

    await query("insert into usuarios (nome, email,senha,nome_loja) values ($1,$2,$3,$4)", [nome.trim(), email.trim().toLowerCase(), senhaCriptografada.trim(), nome_loja.trim()]);

    return res.status(201).json({ Mensagem: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ Mensagem: error.message });
  }
};
const loginUsuario = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) return res.status(401).json({ Mensagem: "Informe todos os campos!" });

  try {
    const usuario = await query("select * from usuarios where email = $1", [email.trim()]);
    if (usuario.rows.length <= 0) return res.status(401).json({ Mensagem: "Usuário e/ou senha inválido(s)." });

    const senhaValida = await bcrypt.compare(senha.trim(), usuario.rows[0].senha);
    if (!senhaValida) return res.status(401).json({ Mensagem: "Usuário e/ou senha inválido(s)." });

    const token = jwt.sign({ id: usuario.rows[0].id, nome: usuario.rows[0].nome }, SenhaJWT, { expiresIn: "8h" });

    return res.json({ Token: token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ Mensagem: "Erro Interno do servidor!" });
  }
};
const mostrarUsuarios = async (req, res) => {
  const usuario = req.usuario;

  return res.json(usuario);
};
const atualizarUsuario = async (req, res) => {
  const { nome, email, senha, nome_loja } = req.body;
  const usuarioLogado = req.usuario;

  // Verifica se preencher pelo menos 1 campo
  if (!nome && !email && !senha && !nome_loja) return res.status(400).json({ Mensagem: "É necessário informar pelo menos 1 dado para ser atualizado!" });

  // Verifica no banco se já existe um email
  const emailExists = await query("select * from usuarios where email = $1", [email.trim()]);
  if (emailExists.rowCount > 0) return res.status(400).json({ Mensagem: "O e-mail informado já está sendo utilizado por outro usuário." });

  // Caso passe, insere o email
  try {
    if (email) query("UPDATE usuarios SET email = $1 where id = $2", [email.trim(), usuarioLogado.id]);
  } catch (error) {
    return res.status(500).json({ Mensagem: "Erro interno do servidor." });
  }

  // Tratar nome caso tenha sido passado
  try {
    if (nome) query("UPDATE usuarios SET nome = $1 where id = $2", [nome.trim(), usuarioLogado.id]);
  } catch (error) {
    return res.status(500).json({ Mensagem: "Erro interno do servidor." });
  }

  // Caso tenha passado a senha, criptografa e insere ao banco
  try {
    if (senha) {
      const senhaCriptografada = await bcrypt.hash(senha.trim(), 10);
      query("UPDATE usuarios SET senha = $1 where id = $2", [senhaCriptografada, usuarioLogado.id]);
    }
  } catch (error) {
    return res.status(500).json({ Mensagem: "Erro interno do servidor." });
  }

  // Nome loja

  try {
    if (nome_loja) {
      query("UPDATE usuarios SET nome_loja = $1 where id = $2", [nome_loja.trim(), usuarioLogado.id]);
    }
  } catch (error) {
    return res.status(500).json({ Mensagem: "Erro interno do servidor." });
  }

  return res.status(200).json("Dados atualizados");
};

module.exports = {
  cadastrarUsuario,
  loginUsuario,
  mostrarUsuarios,
  atualizarUsuario,
};
