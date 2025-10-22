import { NextFunction , Request , Response } from "express";
import { ZodType } from "zod";

export const validate = ( schema : ZodType)=> (req:Request , res: Response , next:NextFunction) => {

    try {
        schema.parse(req.body );
        next();
    }
    catch(error){

        console.log(error);

        return res.status(400).json({

            success: false ,
            message: "Invalid request params",
            data:{},
            error: error

        })

    }
}