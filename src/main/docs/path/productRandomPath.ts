export default {
  post: {
    tags: ["Produto"],
    responses: {
      201: {
        description: "Criar 50 produtos aleatorios",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/schemas/product",
              },
            },
          },
        },
      },
    },
  },
};
