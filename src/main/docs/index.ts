import components from "./components";
import paths from "./paths";
import schemas from "./schemas";

export default {
  openapi: "3.0.0",
  info: {
    title: "LextArt test",
    description: "Desafio Full Stack desenvolvido pelo Eduardo Santana",
    version: "1.0.0",
  },
  tags: [
    {
      name: "Autenticação",
      description: "End-points relacionados a autenticação",
    },
    {
      name: "Produto",
      description: "End-points relacionados a gerenciamento de produtos",
    },
  ],
  schemas,
  paths,
  components,
};
