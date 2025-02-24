export default {
  post: {
    tags: ["Autenticação"],
    summary: "API para a criação usuário",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/createUser",
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
              $ref: "#/schemas/user",
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
