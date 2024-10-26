// Purpose: To store all the constants used in the application.
export const config = {
  PORT: 5000,

  MESSAGE: {
    WELCOME: "You're successfully connected to MONGO API.",
  },

  DB: {
    URI: "mongodb+srv://darielavila43:m5JcyIOUCcN6IjfJ@tarlac.yjnmgso.mongodb.net/?retryWrites=true&w=majority&appName=Tarlac",
  },

  ENDPOINTS: {
    MAIN: "/",
    SERVER: "/api",
    USER: {
      MAIN: "/user",
      GET_ALL: "/get/all",
      GET: "/get/:id",
      CREATE: "/create",
      UPDATE: "/update",
      DELETE: "/delete/:id",
    },
  },
};
