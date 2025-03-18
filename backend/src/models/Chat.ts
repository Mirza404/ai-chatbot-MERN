import mongoose, { Document } from "mongoose";

export interface IChat extends Document {
  role: string;
  content: string;
}

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