import { Request, Response } from 'express';
import User from '../models/user.model';
import { userValidationSchema } from '../utils/userValidation.util';
import generateJWT from '../utils/generateJWT.util';
import bcrypt from 'bcrypt';

export default async function signin(req: Request, res: Response): Promise<Response> {
    try{
        const { error, data } = userValidationSchema.safeParse(req.body);
        if(error){
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }
        const { username, password } = data;

        const isUser = await User.findOne({username});
        if(! isUser) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            });
        }

        const isPasswordValid = await bcrypt.compare(password, isUser.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        const token = generateJWT(isUser._id);
        return res.status(200).json({
            success: true,
            message: "User signed in successfully",
            token
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            successs: false,
            message: `Error while signing in, ${err}`
        });
    }
}