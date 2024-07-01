import { Router } from "express";
import appRouter from "./index.js";

const chatRoutes = Router();

chatRoutes.use("/chat", chatRoutes);

export default chatRoutes;
