import mongoose, { Document } from "mongoose";
import { chatSchema } from "./Chat.js";
import { IUser } from "../types/User.js";

const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  chats: [chatSchema], //use the schema instead of the exported model, important!
});

export default mongoose.model("User", userSchema);
