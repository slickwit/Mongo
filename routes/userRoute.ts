import { Router } from "express";
import { UserController } from "../controllers/userController";
import { config } from "../config/constants";

// Purpose: Define the routes for the user controller
const router = Router();
const userController = new UserController();

router.get(config.ENDPOINTS.USER.GET_ALL, userController.getUsers);
router.get(config.ENDPOINTS.USER.GET, userController.getUser);
router.post(config.ENDPOINTS.USER.CREATE, userController.create);
router.put(config.ENDPOINTS.USER.UPDATE, userController.update);
router.delete(config.ENDPOINTS.USER.DELETE, userController.delete);

export default router;
