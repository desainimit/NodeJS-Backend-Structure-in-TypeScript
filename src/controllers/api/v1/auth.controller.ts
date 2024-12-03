import { Request, Response } from "express";
import { AuthService } from "@services";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public register = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.headers.userId;
      const result = await this.authService.register();
      res.status(200).json({ result, userId });
    } catch (error: unknown) {
      res.status(500).json({ error: error || "Internal Server Error" });
    }
  };
}
