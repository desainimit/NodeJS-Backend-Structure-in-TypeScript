import { STATUSCODE } from "@constants";

class CustomError extends Error {
  public STATUSCODE: number;
  public data: any;
  public status: boolean;
  public errors: any[];
  public stack: string | undefined;
  constructor(STATUSCODE: number, message: string, errors: any[] = []) {
    super();
    this.STATUSCODE = STATUSCODE;
    this.data = null;
    this.status = false;
    this.message = message;
    this.errors = errors;

    Error.captureStackTrace(this, this.constructor);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export { CustomError };
