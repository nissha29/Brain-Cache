import { Router } from "express";
import shareBrain from "../controllers/shareBrain.controller";
import getAnotherUserBrain from "../controllers/getAnotherUserBrain.controller";

const shareRouter = Router();

shareRouter.post('/share/brain', shareBrain);
shareRouter.get('/brain/:shareLink', getAnotherUserBrain);

export default shareRouter;