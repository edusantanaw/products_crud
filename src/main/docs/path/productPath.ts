export default {
  post: {
    tags: ["Produto"],
    summary: "Criar um novo produto",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/createProduct",
          },
        },
      },
    },
    responses: {
      201: {
        description: "Criado com sucesso",
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
    },
  },
  get: {
    tags: ["Produto"],
    summary: "Obter todos produtos",
    responses: {
      200: {
        description: "Listado com sucesso",
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
      400: {
        $ref: "#/components/applicationValidationException",
      },
    },
  },
};
