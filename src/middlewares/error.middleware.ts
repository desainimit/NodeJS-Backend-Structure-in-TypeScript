import { CustomError } from "@utils";
import { STATUSCODE, MESSAGE } from "@constants";
import { Request, Response, NextFunction } from "express";

export class ErrorMiddleware {
  public handle(err: any, _req: Request, res: Response, _next: NextFunction) {
    res.setHeader("Content-Type", "application/json");

    if (err instanceof CustomError) {
      res.status(err.STATUSCODE).json({
        status: err.status,
        message: err.message,
        errors: err.errors,
        data: err.data,
      });
    } else if (err instanceof Error) {
      res.status(STATUSCODE.INTERNAL_STATUS).json({
        status: false,
        message: MESSAGE.INTERNAL_STATUS,
      });
    } else {
      res.status(STATUSCODE.BAD_REQUEST).json({
        status: false,
        message: MESSAGE.BAD_REQUEST,
      });
    }
  }
}
