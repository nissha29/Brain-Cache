import { Types } from "mongoose";
import jwt from "jsonwebtoken";

export default function generateJWT(id: Types.ObjectId) {
    try{
        const secret = process.env.JWT_SECRET;

        if(! secret) {
            throw new Error("JWT_SECRET environment variable is not defined.");
        }
    
        return jwt.sign({id}, secret, {expiresIn: '30d'});
    }catch(err){
        console.log(`Error while geneatig JWT, ${err}`);
    }
}