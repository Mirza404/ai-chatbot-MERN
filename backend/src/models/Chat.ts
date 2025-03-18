import mongoose, { Document } from "mongoose";
import { IChat } from "../types/Chat.js";

export const chatSchema = new mongoose.Schema<IChat>({
  role: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Chat", chatSchema);