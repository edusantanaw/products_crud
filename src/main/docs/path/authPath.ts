export default {
  post: {
    tags: ["Autenticação"],
    summary: "API para autenticar usuário",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/auth",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Autenticado com sucesso",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/authResponse",
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
