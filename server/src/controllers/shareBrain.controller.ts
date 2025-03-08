import { Response } from 'express';
import generateUniqueId from '../utils/generateUniqueId.util';
import CustomRequest from '../types/custom';
import User from '../models/user.model';
import Link from '../models/shareLink.model';

export default async function shareBrain(req: CustomRequest, res: Response) {
    try{
        const { share } = req.body;

        const userId = req.userId;
        const user = await User.findById({ _id:userId });

        if(!user){
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }

        const isShareLinkExists = await Link.findOneAndUpdate(
            { userId }, 
            { share }, 
            { new: true }
        );
        if(isShareLinkExists){
            return res.status(200).json({
                success: true,
                message: 'Share link already exists',
                link: isShareLinkExists
            })
        }
        
        const username: string = user.username;
        const hash = generateUniqueId(username);

        const link = new Link({
            hash,
            userId,
            share
        });
        await link.save();
        return res.status(201).json({
            success: true,
            message: 'Brain share link generated successfully',
            link: link
        });
    }catch(err){
        return res.status(500).json({
            success: false,
            message: `Error while sharing brain, ${err}`
        });
    }
}