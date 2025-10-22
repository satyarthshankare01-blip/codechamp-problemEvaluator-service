import { Response , Request } from "express";
import { submissionDto } from "../dtos/submissionDto";

export function addSubmission( req:Request , res:Response ) {
    const submission = req.body as submissionDto;
    console.log(submission);

    return res.status(201).json({
        success:true,
        error:{},
        message:"successfully collected the submission",
        data: submission
    })
}