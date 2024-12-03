import { Router } from "express";
import { auth } from "./auth.route";

const router = Router();

// Auth Route
router.use("/auth", auth);

// Default Route
router.get("/", (req, res) => {
  res.send("Hello, world!");
});

export { router };
