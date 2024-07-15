import { Router } from "express";
import appRouter from "./index.js";
import Chat from "../models/Chat.js";
import { verifyToken } from "../utils/tokens-manager.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";
import { generateChatCompletion } from "../controllers/chat-controllers.js";

const chatRoutes = Router();

chatRoutes.use("/", async (req, res) => {
  const chats = await Chat.find();
  res.status(200).json({ message: "OK", chats });
});

chatRoutes.post(
  "/new",
  validate(chatCompletionValidator),
  verifyToken,
  generateChatCompletion
);

export default chatRoutes;
