import { Request, Response } from 'express';
import Content from '../models/content.model';
import CustomRequest from '../types/custom';

export default async function getContent(req: CustomRequest, res: Response): Promise<Response> {
    try{
        const userId = req.userId;
        const content = await Content.find({ userId }).populate('userId', 'username');
        return res.status(200).json({
            success: true,
            message: 'Content fetched successfully',
            content
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: `Error while getting content, ${err}`
        });
    }
}