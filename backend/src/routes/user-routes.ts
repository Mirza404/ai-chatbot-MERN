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
import rateLimit from "express-rate-limit";

const userRoutes = Router();

// In user-routes.js
const userApiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});

// Apply rate limiting to all user routes
userRoutes.use(userApiLimiter);
userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.post("/login", validate(loginValidator), userLogin);
userRoutes.get("/auth-status", verifyToken, verifyUser);

export default userRoutes;
