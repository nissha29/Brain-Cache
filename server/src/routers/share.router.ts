import { Router } from "express";
import shareBrain from "../controllers/shareBrain.controller";
import getAnotherUserBrain from "../controllers/getAnotherUserBrain.controller";
import { Request, Response, NextFunction } from "express";
import  auth from "../middlewares/auth.middleware";

const shareRouter = Router();

function shareHandler(fn: Function) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req,res,next);
        } catch (err) {
            console.log(`Error while signing up, ${err}`);
        }
    }
}

shareRouter.post('/share/brain', shareHandler(auth), shareHandler(shareBrain));
shareRouter.get('/brain/:shareLink', shareHandler(auth), shareHandler(getAnotherUserBrain));

export default shareRouter;