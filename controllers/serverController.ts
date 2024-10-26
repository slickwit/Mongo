import { Request, Response, NextFunction } from "express";
import { config } from "../config/constants";

// Purpose: This controller class is responsible for handling the server related requests.
export class ServerController {
  getServer = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.json({ message: config.MESSAGE.WELCOME });
    } catch (error) {
      next(error);
    }
  };
}
