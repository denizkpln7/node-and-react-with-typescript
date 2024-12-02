import { Request, Response } from "express";
// @ts-ignore
import httpStatus from "http-status";

export const validate = (schema:any) => (req:Request,res:Response,next:any) => {
    const {value,error}=schema.validate(req.body);
    if(error){
        const errorMessage = error.details?.map((detail: { message: any; }) => detail.message).join(", ")
        res.status(httpStatus.BAD_REQUEST).json({error: errorMessage})
        return;
    }
    Object.assign(req,value);
    return next();
}
