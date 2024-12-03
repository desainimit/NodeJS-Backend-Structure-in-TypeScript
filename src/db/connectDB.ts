import mongoose from "mongoose";
import { MESSAGE } from "@constants";
import { ErrorHandler } from "@utils";

export const dbConnect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`);
    console.log(MESSAGE.MONGODB_CONNECTED + " To " + process.env.MONGODB_URL);
  } catch (error) {
    ErrorHandler(error);
    process.exit(1);
  }
};
