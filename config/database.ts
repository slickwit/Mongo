import mongoose from "mongoose";
import { logger } from "../helpers/logger";
import { config } from "./constants";

// Connect to MongoDB
export const connectDatabase = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGO_URI || config.DB.URI;
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
    logger.info("Connected to MongoDB");
  } catch (error) {
    logger.error("MongoDB connection error: ", error);
    process.exit(1);
  }
};
