import express from "express";
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "../middleware/errorHandler";
import { routes } from "../routes";

// Create an express application
export const createApp = (): express.Application => {
  const app = express();

  // Middleware
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Routes
  app.use(routes);

  // Error handler
  app.use(errorHandler);

  return app;
};
