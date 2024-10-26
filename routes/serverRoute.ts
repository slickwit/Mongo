import { Router } from "express";
import { ServerController } from "../controllers/serverController";
import { config } from "../config/constants";

// Purpose: This file is used to define the routes for the server
const router = Router();
const userController = new ServerController();

router.get(config.ENDPOINTS.SERVER, userController.getServer);

export default router;
