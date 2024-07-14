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
  auth: {
    type: "object",
    properties: {
      email: {
        type: "string",
      },
      password: {
        type: "string",
      },
    },
    required: ["email", "password", "name"],
  },
  authResponse: {
    type: "object",
    properties: {
      token: {
        type: "string",
      },
    },
  },
  createProduct: {
    type: "object",
    properties: {
      name: {
        type: "string",
      },
      description: {
        type: "string",
      },
      price: {
        type: "number",
      },
    },
    required: ["description", "price", "name"],
  },
  product: {
    type: "object",
    properties: {
      id: {
        type: "string"
      },
      name: {
        type: "string",
      },
      description: {
        type: "string",
      },
      price: {
        type: "number",
      },
      deleted: {
        type: "number"
      },
      updatedAt: {
        type: "string"
      },
      createdAt: {
        type: "string"
      }
    },
  },
  deleted: {
    type: "object",
    properties: {
       message: {
           type: "string"
       }
    }
  }
};
