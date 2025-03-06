import { NextFunction, Router } from 'express';
import addContent from '../controllers/addContent.controller';
import getContent from '../controllers/getContent.controller';
import deleteContent from '../controllers/deleteContent.controller';
import getParticularNote from '../controllers/getParticularNote.controller'
import { Request, Response } from 'express';
import auth from '../middlewares/auth.middleware'

const contentRouter = Router();

function contentHandler(fn: Function) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req,res,next);
        } catch (err) {
            console.log(`Error while signing up, ${err}`);
        }
    }
}

contentRouter.post('/content', contentHandler(auth), contentHandler(addContent));
contentRouter.get('/content', contentHandler(auth), contentHandler(getContent));
contentRouter.delete('/content/:contentId', contentHandler(auth), contentHandler(deleteContent));
contentRouter.get('/content/:contentId', contentHandler(auth), contentHandler(getParticularNote));

export default contentRouter;

