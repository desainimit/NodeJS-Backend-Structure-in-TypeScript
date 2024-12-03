import dotenv from "dotenv";
import { app } from "./app";
import { ErrorHandler } from "@utils";
import { dbConnect } from "@db";

dotenv.config();

try {
  dbConnect().then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}/api`);
    });
  });
} catch (error) {
  ErrorHandler(error);
}
