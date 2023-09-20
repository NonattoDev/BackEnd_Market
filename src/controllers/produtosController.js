const { query } = require("../conexao");

// Listar produtos do usuário logado
const listarProdutos = async (req, res) => {
  const usuario = req.usuario;
  const { categoria } = req.query;
  try {
    if (categoria) {
      const produtoFiltrado = await query("select * from produtos where usuario_id = $1 and categoria = $2 order by id asc", [usuario.id, categoria]);
      if (produtoFiltrado.rowCount <= 0) return res.status(404).json({ Mensagem: `Você não tem produto cadastrado na categoria: ${categoria}` });
      return res.json(produtoFiltrado.rows);
    }

    const produtos = await query("select * from produtos where usuario_id = $1 order by id asc", [usuario.id]);
    return res.json(produtos.rows);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ Mensagem: "Erro Interno do servidor!" });
  }
};
// Detalhar um produto do usuário logado
const detalharProdutos = async (req, res) => {
  const usuario = req.usuario;
  const idProd = req.params;
  try {
    const produto = await query("select * from produtos where usuario_id = $1 and id = $2", [usuario.id, idProd.id]);
    if (produto.rowCount <= 0) return res.status(404).json({ Mensagem: `Não existe produto com ID: ${idProd.id} cadastrado.` });
    return res.json(produto.rows[0]);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ Mensagem: "Erro Interno do servidor!" });
  }
};
// Cadastrar produto para o usuário logado
const cadastrarProdutos = async (req, res) => {
  const { nome, quantidade, categoria, preco, descricao, imagem } = req.body;
  const usuario = req.usuario;

  if (!nome && !quantidade && !categoria && !preco && !descricao) return res.status(400).json({ Mensagem: "Informe todos os dados obrigatorios do produto!" });
  if (!nome) return res.status(400).json({ Mensagem: "O nome do produto deve ser informado." });
  if (!quantidade) return res.status(400).json({ Mensagem: "A quantidade do produto deve ser informado." });
  if (!preco) return res.status(400).json({ Mensagem: "O preço do produto deve ser informado." });
  if (!descricao) return res.status(400).json({ Mensagem: "A descrição do produto deve ser informada." });

  try {
    const produto = await query("insert into produtos(usuario_id,nome,quantidade,categoria,preco,descricao,imagem) values ($1,$2,$3,$4,$5,$6,$7) returning *", [
      usuario.id,
      nome.trim(),
      quantidade,
      categoria.trim(),
      preco,
      descricao.trim(),
      imagem.trim(),
    ]);

    return res.json(produto.rows[0]);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ Mensagem: "Erro interno de servidor!" });
  }
};
// Atualizar produto do usuário logado
const atualizarProdutos = async (req, res) => {
  const { nome, quantidade, categoria, preco, descricao, imagem } = req.body;
  const { id } = req.params;
  const usuario = req.usuario;

  if (!nome && !quantidade && !categoria && !preco && !descricao && !imagem) return res.status(400).json({ Mensagem: "Ao menos 1 produto deverá ser atualizado." });

  const produtoExists = await query("select * from produtos where id = $1", [id]);

  if (produtoExists.rowCount <= 0) return res.status(404).json({ Mensagem: `Não existe produto cadastrado com ID ${id}.` });

  const produtoXusuario = await query("select * from produtos where id = $1 and usuario_id =$2", [id, usuario.id]);

  if (produtoXusuario.rowCount <= 0) return res.status(404).json({ Mensagem: "O usuário logado não tem permissão para acessar este produto." });

  if (nome) {
    try {
      await query("update produtos set nome = $1 where id = $2 and usuario_id = $3 ", [nome.trim(), id, usuario.id]);
    } catch (error) {
      return res.status(500).json({ Mensagem: "Erro interno de servidor!" });
    }
  }
  if (quantidade) {
    try {
      await query("update produtos set quantidade = $1 where id = $2 and usuario_id = $3 ", [quantidade, id, usuario.id]);
    } catch (error) {
      return res.status(500).json({ Mensagem: "Erro interno de servidor!" });
    }
  }
  if (categoria) {
    try {
      await query("update produtos set categoria = $1 where id = $2 and usuario_id = $3 ", [categoria.trim(), id, usuario.id]);
    } catch (error) {
      return res.status(500).json({ Mensagem: "Erro interno de servidor!" });
    }
  }
  if (preco) {
    try {
      await query("update produtos set preco = $1 where id = $2 and usuario_id = $3 ", [preco, id, usuario.id]);
    } catch (error) {
      return res.status(500).json({ Mensagem: "Erro interno de servidor!" });
    }
  }
  if (descricao) {
    try {
      await query("update produtos set descricao = $1 where id = $2 and usuario_id = $3 ", [descricao.trim(), id, usuario.id]);
    } catch (error) {
      return res.status(500).json({ Mensagem: "Erro interno de servidor!" });
    }
  }
  if (imagem) {
    try {
      await query("update produtos set imagem = $1 where id = $2 and usuario_id = $3 ", [imagem.trim(), id, usuario.id]);
    } catch (error) {
      return res.status(500).json({ Mensagem: "Erro interno de servidor!" });
    }
  }

  return res.status(200).json({ Mensagem: "Itens Atualizados" });
};
// Excluir produto do usuário logado

const deletarProdutos = async (req, res) => {
  const { id } = req.params;
  const usuario = req.usuario;

  const produtoExists = await query("select * from produtos where id = $1", [id]);

  if (produtoExists.rowCount <= 0) return res.status(404).json({ Mensagem: `Não existe produto cadastrado com ID ${id}.` });

  const produtoXusuario = await query("select * from produtos where id = $1 and usuario_id =$2", [id, usuario.id]);

  if (produtoXusuario.rowCount <= 0) return res.status(404).json({ Mensagem: "O usuário logado não tem permissão para acessar este produto." });

  try {
    await query("DELETE from produtos where id = $1 and usuario_id = $2", [id, usuario.id]);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ Mensagem: "Erro interno de servidor!" });
  }

  return res.status(200).json({ Mensagem: "Item excluido" });
};

module.exports = {
  listarProdutos,
  detalharProdutos,
  cadastrarProdutos,
  atualizarProdutos,
  deletarProdutos,
};
