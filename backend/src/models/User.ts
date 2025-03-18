import mongoose, { Document } from "mongoose";
import { chatSchema, IChat } from "./Chat.js";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  chats: mongoose.Types.DocumentArray<IChat>;
}

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
  chats: [chatSchema], // Simply use the imported schema here
});

export default mongoose.model("User", userSchema);
