import { Response } from 'express';
import { contentValidationSchema } from '../utils/contentValidation.util';
import Content from '../models/content.model';
import Tags from '../models/tags.model';
import CustomRequest from '../types/custom';
import { Types } from 'mongoose';

export default async function addContent(req: CustomRequest, res: Response) {
    try{
        const { error, data } = contentValidationSchema.safeParse(req.body);
        if(error){
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }

        const { link, type, title, tags } = data;
        const userId = req.userId && typeof req.userId === 'string' ? new Types.ObjectId(req.userId) : null;

        if(!userId){
            return res.status(400).json({
                success: false,
                message: "Invalid user id"
            });
        }
        
        if(tags && Array.isArray(tags)){
            if(tags.length > 2){
                return res.status(400).json({
                    success: false,
                    message: "Maximum 2 tags are allowed"
                });
            }
        }

        const tagIds: Types.ObjectId[] = [];

        if(tags){
            for(const tagTitle of tags){
                const tag = await Tags.findOne({ title: tagTitle})
                if(tag){
                    tagIds.push(tag._id);
                }
                else{
                    const newTag = new Tags({
                        title: tagTitle
                    });
                    await newTag.save();
                    tagIds.push(newTag._id);
                }
            }
        }
        
        const content = new Content({
            link,
            type,
            title,
            tags: tagIds,
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