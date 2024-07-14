export default {
  get: {
    tags: ["Produto"],
    summary: "Obter produto pelo id",
    responses: {
      200: {
        description: "Obtido com sucesso!",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/product",
            },
          },
        },
      },
      400: {
        $ref: "#/components/applicationValidationException",
      },
      404: {
        $ref: "#/components/notFoundException",
      },
    },
  },
  delete: {
    tags: ["Produto"],
    summary: "Remover produto pelo id",
    responses: {
      200: {
        description: "Removido com sucesso!",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/deleted",
            },
          },
        },
      },
      400: {
        $ref: "#/components/applicationValidationException",
      },
      404: {
        $ref: "#/components/notFoundException",
      },
    },
  },
  put: {
    tags: ["Produto"],
    summary: "Atualizar produto pelo id",
    responses: {
      200: {
        description: "Atualizado com sucesso!",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/product",
            },
          },
        },
      },
      404: {
        $ref: "#/components/notFoundException",
      },
    },
  },
};
