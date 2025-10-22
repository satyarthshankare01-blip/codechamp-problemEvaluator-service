import express from "express";
import {pingCheck} from "../../controllers/pingController.js"
import  submissionRouter  from "./submissionRoutes.js"
const v1Router = express.Router();
v1Router.use('/submission' , submissionRouter )
v1Router.use('/ping' , pingCheck)

export default v1Router;

