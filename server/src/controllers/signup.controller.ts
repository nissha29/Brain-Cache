import { Request, Response } from 'express';
import User from '../models/user.model';
import generateJWT from '../utils/generateJWT.util';
import { userValidationSchema } from '../utils/userValidation.util';
import bcrypt from 'bcrypt';

export default async function signup(req: Request, res: Response): Promise<Response> { 
    try{
        const { error, data } = userValidationSchema.safeParse(req.body);
        if(error){
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }
        const { username, password } = data;

        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(409).json({
                success: false,
                message: "Username already exists"
            });
        }

        const hashedPassword: string = await bcrypt.hash(password, 10);   
        
        const user = new User ({
            username,
            password: hashedPassword
        })

        const token = generateJWT(user._id);

        await user.save();

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            token
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            successs: false,
            message: `Error while signing up, ${err}`
        });
    }
}