-- CUIDADO!!! Deleta a  tabela caso exista
DROP TABLE if exists produtos ;
DROP TABLE if exists usuarios ;
-- ____________________________--

-- Criação da tabela "usuarios"
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome TEXT not null,
  nome_loja TEXT not null,
  email TEXT UNIQUE,
  senha TEXT not null
);

-- Criação da tabela "produtos"
CREATE TABLE produtos (
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id),
  nome TEXT not null,
  quantidade INTEGER not null,
  categoria TEXT not null,
  preco INTEGER not null,
  descricao TEXT,
  imagem TEXT 
);
  
 -- Insere usuarios para teste.
insert into "usuarios" ("email", "id", "nome", "nome_loja", "senha") values ('mariafernandah@gmail.com ', 4, 'Mariah Fernanda', 'Cubos', '$2b$10$TEI7tYXL8uSYtIkGpm4wqejVN6ZDQsteB1pGiLwP7.5WGJA6c81bi');
insert into "usuarios" ("email", "id", "nome", "nome_loja", "senha") values ('JoãodaSilva@gmail.com', 3, 'João da Silva', 'Softline Sistemas', '$2b$10$Y0RNvFviNO5P.w4MUu9FbOkVu5FTIQKObkIe6V3HwUVH.aWycXIqq');
insert into "usuarios" ("email", "id", "nome", "nome_loja", "senha") values ('MarcosAurelio@gmail.com', 5, 'Marcos Aurelio', 'Aqua Load', '$2b$10$z1c1VmG.AsmIdow5gDanq.SzWGAmNypbBNGjF/OxLsGCjEbVSoVUy');
insert into "usuarios" ("email", "id", "nome", "nome_loja", "senha") values ('catarinasilva@gmail.com ', 6, 'Catarina da Silva', 'HB Contabilidade ', '$2b$10$kbZ8oZV45P.SWICmMRRuUeUErZTvdYL5VVILwjgRmj3rgWgnJkr9G');
 -- Insere produtos e atribui para usuarios.
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Roupas', 'Camisa preta', 123, 'URL.com', 'Camisa Adidas', 5000, 10, 3);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Calçados', 'Tênis esportivo', 124, 'URL.com', 'Tênis Nike', 3500, 5, 3);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Roupas', 'Shorts curto', 125, 'URL.com', 'Shorts Jeans', 2500, 8, 3);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Acessórios', 'Bolsa de mão', 126, 'URL.com', 'Bolsa de Couro', 6000, 3, 4);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Acessórios', 'Relógio analógico', 127, 'URL.com', 'Relógio Casio', 4000, 2, 5);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Roupas', 'Jaqueta preta', 128, 'URL.com', 'Jaqueta de Couro', 8000, 4, 6);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Roupas', 'Calça azul', 129, 'URL.com', 'Calça Jeans', 3000, 6, 6);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Acessórios', 'Óculos de sol estilo aviador', 130, 'URL.com', 'Óculos de Sol', 2000, 7, 6);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Calçados', 'Sapato social preto', 131, 'URL.com', 'Sapato Social', 7000, 1, 3);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Acessórios', 'Bolsa esportiva resistente à água', 132, 'URL.com', 'Bolsa Esportiva', 4000, 3, 4);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Roupas', 'Camiseta com estampa colorida', 133, 'URL.com', 'Camiseta Estampada', 1500, 12, 4);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Acessórios', 'Relógio digital com cronômetro', 134, 'URL.com', 'Relógio Digital', 3000, 2, 4);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Roupas', 'Vestido longo para ocasiões especiais', 135, 'URL.com', 'Vestido de Festa', 9000, 4, 3);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Calçados', 'Tênis para corrida', 136, 'URL.com', 'Tênis Esportivo', 4500, 6, 5);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Roupas', 'Blusa de tricô quentinha', 137, 'URL.com', 'Blusa de Tricô', 3500, 8, 4);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Acessórios', 'Boné ajustável', 138, 'URL.com', 'Boné Unissex', 1000, 3, 4);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Roupas', 'Calça legging fitness', 139, 'URL.com', 'Calça Legging', 2000, 5, 5);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Acessórios', 'Carteira masculina de couro', 140, 'URL.com', 'Carteira de Couro', 2500, 2, 5);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Roupas', 'Blazer feminino elegante', 141, 'URL.com', 'Blazer Feminino', 7000, 1, 5);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Calçados', 'Sandália de salto alto', 142, 'URL.com', 'Sandália de Salto', 5500, 4, 3);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Roupas', 'Camisa preta', 143, 'https://example.com/imagem1.jpg', 'Camisa Adidas', 5000, 10, 3);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Calçados', 'Tênis esportivo', 144, 'https://example.com/imagem2.jpg', 'Tênis Nike', 8000, 5, 5);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Roupas', 'Bermuda jeans azul', 145, 'https://example.com/imagem3.jpg', 'Bermuda Jeans', 3500, 8, 3);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Acessórios', 'Mochila para escola', 146, 'https://example.com/imagem4.jpg', 'Mochila Escolar', 6000, 3, 4);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Eletrônicos', 'Smartphone Samsung Galaxy', 147, 'https://example.com/imagem5.jpg', 'Celular Samsung', 25000, 2, 5);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Roupas', 'Camisa polo branca', 149, 'https://example.com/imagem7.jpg', 'Camisa Polo', 4000, 6, 3);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Roupas', 'Calça jeans slim', 150, 'https://example.com/imagem8.jpg', 'Calça Jeans', 6000, 4, 4);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Calçados', 'Tênis casual', 151, 'https://example.com/imagem9.jpg', 'Tênis Converse', 7000, 3, 5);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Acessórios', 'Óculos de sol polarizado', 152, 'https://example.com/imagem10.jpg', 'Óculos de Sol', 3500, 2, 6);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Acessórios', 'Chapéu estilo Fedora', 153, 'https://example.com/imagem11.jpg', 'Chapéu Fedora', 2500, 5, 6);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Roupas', 'Camiseta de manga curta', 154, 'https://example.com/imagem12.jpg', 'Camiseta Listrada', 3000, 7, 6);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Roupas', 'Calça de moletom cinza', 155, 'https://example.com/imagem13.jpg', 'Calça de Moletom', 2000, 4, 3);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Acessórios', 'Relógio analógico', 156, 'https://example.com/imagem14.jpg', 'Relógio de Pulso', 9000, 2, 4);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Eletrônicos', 'Smartphone iPhone', 157, 'https://example.com/imagem15.jpg', 'Celular iPhone', 35000, 1, 5);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Livros', 'Trilogia completa', 158, 'https://example.com/imagem16.jpg', 'Livro "O Senhor dos Anéis"', 5500, 3, 6);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Roupas', 'Jaqueta de couro preta', 159, 'https://example.com/imagem17.jpg', 'Jaqueta de Couro', 12000, 4, 4);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Calçados', 'Sapato social preto', 160, 'https://example.com/imagem18.jpg', 'Sapato Social', 10000, 2, 3);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Acessórios', 'Boné esportivo azul', 161, 'https://example.com/imagem19.jpg', 'Boné Esportivo', 1500, 5, 5);
insert into "produtos" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade", "usuario_id") values ('Eletrônicos', 'Notebook Dell i7', 162, 'https://example.com/imagem20.jpg', 'Notebook Dell', 250000, 1, 5);




