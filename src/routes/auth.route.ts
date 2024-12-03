import { Router } from "express";
import { AuthController } from "@controllers";

const auth = Router();
const authController = new AuthController();

auth.get("/", authController.register);

export { auth };
