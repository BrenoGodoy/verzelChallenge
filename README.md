
# Verzel Carshop

Um catálogo de veículos a venda feito em Reactjs (front) e .net 7 (back). No APP você pode fazer login como administrador e isso libera uma página de admin com um CRUD dos veículos registrados na página. Todas as requisições do CRUD utilizam um token JWT para autorizar a requisição, logo só usuarios logados conseguem fazer essas edições.

Assim que entrar no APP não haverão nem veículos nem admins criados. Logo a primeira coisa a se fazer é clicar em Login como Administrador no canto superior direito e clique em registrar abaixo da aba de Login. Crie seu usuário e você será redirecionado para a HOME da página. No canto superior direito deverá ter um botão "Página do Administrador" que direciona para o CRUD de carros e um botão "Sair" que desloga o usuário. A página do Administrador tem 4 funções bem intuitivas que devem ser realizadas apenas se o token JWT do usuário for válido. Após realizar a ação, é só ir até a Home ou a página de listar veículos e verificar se a alteração ou adição foi realizada.


## Antes de iniciar o projeto
 
Para conseguir rodar o projeto você deverá ter instalado:

- [.net 7 sdk](https://dotnet.microsoft.com/en-us/download) (caso esteja usando linux)

- [cli do .net](https://learn.microsoft.com/pt-br/dotnet/core/tools/)

- [.net EF Core](https://learn.microsoft.com/en-us/ef/core/cli/dotnet)

- [MySql](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04)



## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:BrenoGodoy/verzelChallenge.git
```

Entre no diretório do projeto

```bash
  cd verzelChallenge
```

Instale as dependências do Front

```bash
  cd front-end
  npm install
```

Inicie o servidor

```bash
  npm start
```

Instale as dependências do Back

```bash
// Navegue até a raíz do projeto caso não esteja
  cd BackEnd
  dotnet restore
```

Verifique se as configurações de conexão com o banco de dados estão corretas no arquivo (appsettings.json). Certifique-se de que você tem acesso ao banco de dados e que as configurações estão corretas.

Com as configurações prontas, Crie o Banco de Dados

```bash
    dotnet ef database update
```

Compile a aplicação
```bash
  dotnet build
```

Após isso é só iniciar o servidor
```bash
    dotnet run
```


