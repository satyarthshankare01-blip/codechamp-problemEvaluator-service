import express from "express";
import { validate } from "../../validators/submissionValidator";
import { submissionZodSchema } from "../../dtos/submissionDto";
import { addSubmission } from "../../controllers/submissionController";
 const submissionRouter = express.Router();
 submissionRouter.post('/' , validate(submissionZodSchema) , addSubmission );
export default submissionRouter;

