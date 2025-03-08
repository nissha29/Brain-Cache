import { Request, Response } from "express";
import Link from "../models/shareLink.model";
import Content from "../models/content.model";

export default async function getAnotherUserBrain(req: Request, res: Response) {
    try{
        const shareLink = req.params.shareLink;

        const isUserBrain = await Link.findOne({hash: shareLink});
        
        if(!isUserBrain){
            return res.status(404).json({
                success: false,
                message: 'User brain not found'
            });
        }

        const isSharingEnabled = await Link.findOne({hash: shareLink, share: true});
        if(! isSharingEnabled){
            return res.status(403).json({
                success: false,
                messge: `Access denied`
            })
        }

        const userId = isUserBrain.userId;
        const userBrainCache = await Content.find({userId}).populate('userId', 'username');

        return res.status(200).json({
            success: true,
            message: 'User brain found',
            brain: userBrainCache
        });
    }catch(err){
        return res.status(500).json({
            success: false,
            message: `Error while getting another user brain, ${err}`
        });
    }
}