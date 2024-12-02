import { Request, Response } from "express";
import {PostType} from "../types/Post";
import Post from "../models/Post";


export const getAllPost = async (req: Request, res: Response) => {
    try {
        const blog = await Post.find();
        return res.status(200).json(blog);
    } catch (error) {
        return res.status(500).json({err: error})
    }
}



export const getPostById = async (req: Request, res: Response) => {
    const { id} = req.params;
    const singleBlog = await Post.findById({_id: id});
    try {
        return res.status(200).json(singleBlog);
    } catch (error) {
        return res.status(500).json({err: error});
    }
}

export const createPost = async (req: Request, res: Response) => {
    const body:PostType = req.body;
    body.time=Date.now().toString();
    const gameToCreate = await Post.create(body);
    try {
        return res.status(201).json(gameToCreate);
    } catch (error) {
        return res.status(500).json({msg: "Couldn't create the game"})
    }
}

export const updateGame = async (req: Request, res: Response) => {
    const { id } = req.params;
    const gameToUpdate = await Post.findByIdAndUpdate(id, req.body, {new: true})
    try {
        return res.status(202).json(gameToUpdate);
    } catch (error) {
        return res.status(500).json({msg: "Couldn't update the game"});
    }
}

export const deleteGame = async (req: Request, res: Response) => {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);
    try {
        return res.status(203).json({message: "deleted successfully"});
    } catch (error) {
        return res.status(500).json({message: "couldn't delete the game"})
    }
}