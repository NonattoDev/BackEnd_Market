##Projeto de Gerenciamento de Usuários e Produtos
Este é um projeto de gerenciamento de usuários e produtos, onde você pode cadastrar, visualizar, atualizar e excluir usuários e produtos através de uma API RESTful.

Pré-requisitos
Certifique-se de ter o seguinte software instalado em seu sistema:

Node.js (versão 12 ou superior)
Banco de dados PostgreSQL
Configuração do Banco de Dados
Antes de executar o projeto, é necessário configurar o banco de dados PostgreSQL. Siga as etapas abaixo:

Crie um banco de dados vazio no PostgreSQL para o projeto.
Abra o arquivo conexao.js localizado na pasta conexao e atualize as informações de conexão com o banco de dados, como nome do banco, nome de usuário e senha.
Instalação
Siga as etapas abaixo para executar o projeto:

Clone este repositório para o diretório desejado em sua máquina.
Abra um terminal e navegue até o diretório raiz do projeto.
Execute o comando npm install para instalar as dependências do projeto.
Execute o comando npm start para iniciar o servidor.
Após seguir essas etapas, o servidor será iniciado e estará pronto para receber solicitações.

Endpoints da API
A API fornece os seguintes endpoints para gerenciamento de usuários e produtos:

Usuários
POST /usuarios/cadastrar: Cadastra um novo usuário. Parâmetros necessários: nome, email, senha e nome_loja.
POST /usuarios/login: Realiza o login do usuário. Parâmetros necessários: email e senha.
Produtos
GET /produtos: Retorna a lista de produtos do usuário logado. Parâmetro opcional: categoria.
GET /produtos/:id: Retorna os detalhes de um produto específico do usuário logado.
POST /produtos: Cadastra um novo produto para o usuário logado. Parâmetros necessários: nome, quantidade, categoria, preco e descricao.
PUT /produtos/:id: Atualiza as informações de um produto específico do usuário logado. Parâmetros opcionais: nome, quantidade, categoria, preco, descricao e imagem.
DELETE /produtos/:id: Exclui um produto específico do usuário logado.
Observação: Certifique-se de incluir o token de autenticação no cabeçalho das solicitações para os endpoints que requerem autenticação. O token deve ser obtido ao realizar o login com sucesso.

Contribuindo
Se você quiser contribuir para este projeto, siga as etapas abaixo:

Faça um fork deste repositório.
Crie uma branch para sua nova funcionalidade ou correção de bug: git checkout -b minha-nova-funcionalidade.
Faça as alterações desejadas no código.
Commit suas alterações: git commit -m 'Adicionando nova funcionalidade'.
Push para a branch: git push origin minha-nova-funcionalidade.
Envie um pull request.
Conclusão
Este é um projeto básico de gerenciamento de usuários e produtos que pode ser expandido e aprimorado de várias maneiras. Sinta-se à vontade para explorar e adicionar novos recursos de acordo com suas necessidades. Esperamos que este projeto seja útil como ponto de partida para suas próprias aplicações.
