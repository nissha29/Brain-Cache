import { Response } from 'express';
import { contentValidationSchema } from '../utils/contentValidation.util';
import Content from '../models/content.model';
import CustomRequest from '../types/custom';
import { Types } from 'mongoose';

export default async function addContent(req: CustomRequest, res: Response) {
    try{
        const { error, data } = contentValidationSchema.safeParse(req.body);
        if(error){
            return res.status(400).json({
                success: false,
                message: `Invalid content type, ${error.message}`
            });
        }

        const { type, title, description } = data;
        const link = req.body?.link;
        const userId = req.userId && typeof req.userId === 'string' ? new Types.ObjectId(req.userId) : null;

        if(!userId){
            return res.status(400).json({
                success: false,
                message: "Invalid user id"
            });
        }

        const currDate = new Date();
        const createdAt = `${currDate.toLocaleDateString('en-US', { weekday: 'long' })}, ${currDate.toLocaleDateString()}`;
        
        const content = new Content({
            link,
            type,
            title,
            description,
            createdAt,
            userId
        })

        await content.save();

        return res.status(201).json({
            success: true,
            message: "Content added successfully",
            content
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: `Error while adding content, ${err}`
        });
    }
}