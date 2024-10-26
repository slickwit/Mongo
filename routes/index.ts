import { Router } from "express";
import { config } from "../config/constants";
import serverRoutes from "./serverRoute";
import userRoutes from "./userRoute";

export const routes = Router();

// Add all routes here
routes.use(serverRoutes);
routes.use(config.ENDPOINTS.SERVER + config.ENDPOINTS.USER.MAIN, userRoutes);
