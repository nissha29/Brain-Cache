import { Router, Request, Response } from 'express';
import signup from '../controllers/signup.controller';
import signin from '../controllers/signin.controller';

const userRouter = Router();

function userHandler(fn: Function) {
    return async (req: Request, res: Response) => {
        try {
            await fn(req,res);
        } catch (err) {
            console.log(`Error while signing up, ${err}`);
        }
    }
}

userRouter.post('/signup', userHandler(signup));

userRouter.post('/signin', userHandler(signin));

export default userRouter;