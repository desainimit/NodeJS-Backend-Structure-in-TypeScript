import { NextFunction, Request, Response } from "express";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("Auth middleware");
    req.headers.userId = "123456";
    next();
  } catch (error: unknown) {
    res.status(500).json({ error: error || "Internal Server Error" });
  }
};

export { authMiddleware };
