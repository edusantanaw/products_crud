export default {
  delete: {
    tags: ["Produto"],
    summary: "Remover todos produtos",
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
};
