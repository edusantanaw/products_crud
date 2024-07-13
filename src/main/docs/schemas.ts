export default {
  user: {
    type: "object",
    properties: {
      name: {
        type: "string",
      },
      email: {
        type: "string",
      },
      password: {
        type: "string",
      },
      createdAt: {
        type: "string",
      },
      updatedAt: {
        type: "string",
      },
      deleted: {
        type: "number",
      },
    },
  },
  createUser: {
    type: "object",
    properties: {
      name: {
        type: "string",
      },
      email: {
        type: "string",
      },
      password: {
        type: "string",
      },
    },
    required: ["email", "password", "name"],
  },
};
