import jwt from 'jsonwebtoken';
import { Request } from 'express';

export function verifyJWT(req: Request) {
    try {
        const token = req.body.token;
        const secret = process.env.JWT_SECRET;

        if (!secret) {
            throw new Error("JWT_SECRET environment variable is not defined.");
        }

        const decoded = jwt.verify(token, secret);

    } catch (err) {
        console.log(`Error while verifying JWT, ${err}`);
    }
}