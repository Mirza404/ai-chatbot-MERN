import { Router } from "express";
import appRouter from "./index.js";
import Chat from "../models/Chat.js";

const chatRoutes = Router();

chatRoutes.use("/", async (req, res) => {
  const chats = await Chat.find();
  res.status(200).json({ message: "OK", chats });
});

export default chatRoutes;
