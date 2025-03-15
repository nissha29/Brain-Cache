import { Request, Response } from 'express';
import CustomRequest from '../types/custom.type';
import Content from '../models/content.model';

export default async function deleteContent(req: CustomRequest, res: Response) {
    try{
        const userId = req.userId;
        const contentId = req.params.contentId;

        const toDelete = await Content.deleteOne({ _id: contentId, userId });
        if(!toDelete){
            return res.status(404).json({
                success: false,
                message: 'Content not found to delete'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Content deleted successfully'
        });
    }catch(err){
        return res.status(500).json({
            success: false,
            message: `Error while deleting content, ${err}`
        });
    }
}