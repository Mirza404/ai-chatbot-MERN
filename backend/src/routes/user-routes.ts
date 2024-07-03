import { Router } from "express";
import appRouter from "./index.js";
import { validate, signupValidator } from "../utils/validators.js";
import { getAllUsers, userSignup } from "../controllers/user-controllers.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
export default userRoutes;
