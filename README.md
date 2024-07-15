# TESTE NODE

Swagger: http://localhost:8080/api-docs/

## Arquitetura do projeto
O padrão utilizado busca criar um sistema com baixo nível de acoplamento, ou seja, a aplicação foi dividida em camadas, buscando ter responsabilidades únicas. 

### O quê cada camada significa?

Controller: O controller é responsável por ser a porta de entrada na nossa aplicação, ou seja, ele recebe os dados e redireciona para camadas mais internas. Após os dados serem processados, o controller retorna o resultado para o cliente.

Application / Usecase: O usecase é responsável por processar as regras de negócio da nossa aplicação, fazendo verificações para garantir que as regras de negócio sejam atendidas.

Infra / Repository: O repository é responsável por fazer a interação com o banco de dados, como obter, criar, atualizar itens do banco de dados. 

## Organização de pastas
Application: A pasta application é onde estão localizados os nossos usecases e interfaces que os usecases utilizam.

Controllers: A pasta controller é onde estão localizados todos os nossos controllers e dtos de validações.

Domain: A pasta domain é onde estão localizadas as nossas entidades de domínio.

Helpers: A pasta helpers é onde estão localizadas as nossas funções e classes que podem ser reutilizadas em diversas partes do nosso sistema.

Infra: A pasta de infra é onde temos os nossos gateways, repositórios e as entidades do banco de dados.

Main: A pasta main é onde é realizada a parte de configuração, rotas, fábricas, adaptadores, documentação e middlewares.

## ROTEAMENTO
O modelo de rotas seguem o seguinte padrão '/api/{model}' ou '/api/{model}/:id'\
Exemplo:
```ts
   router.get(
    "/product",
    authMiddleware,
    expressAdapter(loadAllProductControllerFactory())
  );
  router.get(
    "/product/:id",
    authMiddleware,
    expressAdapter(loadProductByIdControllerFactory())
  );
```

## Padrões de projetos
Foi utilizado como principal padrão de projetos o Adapter e o Factory:
* Adapter: O adapter busca desacoplar a nossa aplicação do framework utilizado, facilitando a mudança do mesmo.
```ts
export default <In>(controller: IController<In>) => {
  return async (req: Request, res: Response) => {
    try {
      const { statusCode, data } = await controller.handler({
        ...req.body,
        ...req.params,
        ...req.query,
      });
      logger.info(`${req.ip} ${req.method} ${req.url} ${statusCode}`);
      return res.status(statusCode).json(data);
    } catch (error) {
      const { data, statusCode } = errorHandler(error);
      logger.error(`${req.ip} ${req.method} ${req.url} ${statusCode} ${data}`);
      return res.status(statusCode).json(data);
    }
  };
};
```
* Factory: O factory é utilizado para facilitar a criação das nossas clasess.
```ts
export function authUsecaseFactory() {
  const userRepository = new UserRepository();
  const encrypter = new Encrypter();
  const jwtService = new JwtService();
  return new AuthUsecase(userRepository, encrypter, jwtService);
}
```

## O que preciso fazer para rodar o projeto?
Primeiramente, você vai precisar ter instalado em sua máquina o Node.js. Após isto, será necessário criar um arquivo .env e depois configurar as seguintes variáveis de ambiente:  
```sh
ENVIRONMENT=0 # 0 = dev and 1 = prod #
JWT_SECRET="secret"
PORT=8080

POSTGRES_USER="postgres"
POSTGRES_HOST="localhost"
POSTGRES_PASSWORD="password"
POSTGRES_DATABASE="database"

```

### Como posso executar o projeto?
* Utilizando o Node, na pasta raiz do projeto, será necessário executar um dos seguintes comandos:
```sh
yarn dev
npm run dev
```