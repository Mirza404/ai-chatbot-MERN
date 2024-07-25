import { Router } from "express";
import appRouter from "./index.js";
// Change made to the model, not requiring the "Chat" import any more.
import User from "../models/User.js";
import { verifyToken } from "../utils/tokens-manager.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";
import {
  deleteChats,
  generateChatCompletion,
  sendChatsToUser,
} from "../controllers/chat-controllers.js";
import rateLimit from "express-rate-limit";

const chatRoutes = Router();

const chatApiLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 50, // Limit each IP to 50 requests per windowMs
});

// Apply rate limiting to all chat routes
chatRoutes.use(chatApiLimiter);

chatRoutes.post(
  "/new",
  validate(chatCompletionValidator),
  verifyToken,
  generateChatCompletion
);

chatRoutes.get("/all-chats", verifyToken, sendChatsToUser);

chatRoutes.delete("/delete", verifyToken, deleteChats);

export default chatRoutes;
