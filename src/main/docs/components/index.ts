export default {
  applicationValidationException: {
    description: "Falha ao validar dados de dominio",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            message: {
              type: "string",
            },
            name: {
              type: "string",
            },
          },
        },
      },
    },
  },
  notFoundException: {
    description: "Não encontrado",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            message: {
              type: "string",
            },
            name: {
              type: "string",
            },
          },
        },
      },
    },
  },
};
