import { Response, NextFunction } from "express";
import verifyJWT from "../utils/verifyJWT.util";
import { JwtPayload } from "jsonwebtoken";
import CustomRequest from "../types/custom.type";

export default function auth(req: CustomRequest, res: Response, next: NextFunction) {
    try{
        if(!req.headers.authorization){
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            });
        }
        const decoded = verifyJWT(req.headers.authorization) as JwtPayload;
        if(!decoded){
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            });
        }
        req.userId = decoded.id;
        next();
    }catch(err){
        console.log(`Error while authenticating user - ${err}`);
        return res.status(500).json({
            success: false,
            message: `Error while authenticating user, ${err}`
        });
    }
}