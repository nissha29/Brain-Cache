import { Request, Response } from "express";
import Content from "../models/content.model";

export default async function getParticularNote(req: Request, res: Response) {
    try{
        const { contentId } = req.params;

        const note = await Content.findById(contentId);
        if(! note){
            return res.status(404).json({
                success: false,
                message: `Note not found`
            })
        }

        return res.status(200).json({
            success: true,
            note
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: `server error in get particular note controller`
        })
    }
}