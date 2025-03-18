import mongoose from "mongoose";
import { IChat } from "./Chat.js";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  chats: mongoose.Types.DocumentArray<IChat>;
}
