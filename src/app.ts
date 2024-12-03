import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router } from "@routes";
import path from "path";
import { ErrorMiddleware } from "@middlewares";

const app = express();

// Middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/assets", express.static(path.resolve(__dirname, "public")));

// Error Json Response
const errorMiddleware = new ErrorMiddleware();
app.use(errorMiddleware.handle);
// Routes
app.use("/api/v1", router);

export { app };
