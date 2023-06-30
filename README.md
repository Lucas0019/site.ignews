<p align="center">

  <h3 align="center">Ignews | Treinamento Ignite 🗞️ </h3>

</p>

<p align="center">
  <a href="#dart-sobre">Motivação</a> &#xa0; | &#xa0;
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-Requisitos">Requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a>
</p>

## 🗿 Motivação

Aprender sobre testes e como implementar os mesmos usando Jest e o react testing library em um projeto Next previamente desenvolvido com Next 12, junto com GraphQL como client de requisição de dados, para poder ter um entendimento melhor dos teste e como saber implementar testes em projetos reais.

## 🎯 Sobre

O projeto Ignews é uma plataforma que permite aos usuários acessarem conteúdo de notícias sobre tecnologia mediante uma assinatura mensal. Para garantir o acesso ao conteúdo completo das postagens, os usuários pagam uma taxa mensal.

Essa plataforma é desenvolvida utilizando uma abordagem Serverless, o que significa que todo o processo que normalmente seria realizado em um backend convencional foi integrado diretamente no frontend. Além disso, o projeto segue o padrão JAMStack, no qual o frontend é integrado a um CMS externo e usa o GraphQL para realizar as requisições de dados das postagens e dos usuários. A integração com o serviço de pagamento Stripe também é feita no frontend para realizar o processamento das assinaturas mensais.

As postagens são criadas e gerenciadas pelo administrador no Prismic CMS, e são integradas ao frontend utilizando o sistema de webhooks do Prismic. Esse sistema permite que, sempre que uma postagem é criada ou editada, o Prismic envie uma requisição para o frontend informando sobre a alteração. Em resposta, o frontend faz uma requisição ao Prismic para obter os dados atualizados e exibi-los aos usuários.

![image](https://github.com/Lucas0019/site.ignews/assets/52923100/fd5515de-f005-4ae7-8e7e-d543b01ccfd0)

## 👉 Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [Next.js](https://nextjs.org/)
- [Prismic CMS](https://prismic.io/)
- [GraphQL](https://graphql.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Stripe](https://stripe.com/br)
- [FaunaDB](https://fauna.com/)
- [Next Auth](https://next-auth.js.org/)


## ✅ Requisitos

- [Node](https://nodejs.org/en/) na versão v16.18.1 ou superior.
- [Yarn](https://yarnpkg.com/lang/en/)
- [Stripe CLI](https://stripe.com/docs/stripe-cli)
- [FaunaDB](https://fauna.com/)
- [Prismic CLI](https://prismic.io/docs/technologies/integrating-with-an-existing-project-cli)

## 🔥 Começando

```bash
# Clone this project
$ git clone https://github.com/Lucas0019/site.ignews

# Install dependencies
$ yarn install

# Run the project
$ yarn dev

# Tests the project
$ yarn test

# Coverage the project
$ yarn test --coverage

# The server will initialize in the <http://localhost:3000>

```
