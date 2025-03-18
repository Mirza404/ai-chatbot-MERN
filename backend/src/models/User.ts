import mongoose, { Document } from "mongoose";
import chatSchema, { IChat } from "./Chat.js";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  chats: IChat[];
}

const userSchema = new mongoose.Schema({
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
  chats: { type: [new mongoose.Schema<IChat>()], default: [] },
});

export default mongoose.model("User", userSchema);
