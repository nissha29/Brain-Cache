import { Request } from "express";

export default interface CustomRequest extends Request {
    userId: string;
}