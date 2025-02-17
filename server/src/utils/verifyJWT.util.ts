import jwt from 'jsonwebtoken';

export default function verifyJWT(token: string){
    const secret = process.env.JWT_SECRET;

    if(! secret){
        throw new Error("JWT_SECRET environment variable is not defined.");
    }

    return jwt.verify(token, secret);
}