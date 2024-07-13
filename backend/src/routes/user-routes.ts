import { Router } from "express";
import appRouter from "./index.js";
import {
  validate,
  signupValidator,
  loginValidator,
} from "../utils/validators.js";
import {
  getAllUsers,
  userLogin,
  userSignup,
  verifyUser,
} from "../controllers/user-controllers.js";
import { verifyToken } from "../utils/tokens-manager.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.post("/login", validate(loginValidator), userLogin);
userRoutes.get("/auth-status", verifyToken, verifyUser);

export default userRoutes;
