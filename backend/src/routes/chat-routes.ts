import { Router } from "express";
import appRouter from "./index.js";
// Change made to the model, not requiring the "Chat" import any more.
import User from "../models/User.js";
import { verifyToken } from "../utils/tokens-manager.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";
import { generateChatCompletion } from "../controllers/chat-controllers.js";

const chatRoutes = Router();

chatRoutes.post(
  "/new",
  validate(chatCompletionValidator),
  verifyToken,
  generateChatCompletion
);

export default chatRoutes;
