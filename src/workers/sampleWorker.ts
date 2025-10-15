import { Worker , Job } from "bullmq";

import redisConnection from "../config/redisConfig.js";
import sampleJob from "../jobs/samplejob.js";

export default  function  sampleWorker ( queuename : string ) {
  
    new Worker (  
        queuename , 
        async ( job : Job) =>  {
            
            console.log("sample job worker kicking" , job );

            if( job.name  === "sampleJob"){
                 
                const samplejobinstance = new sampleJob(job.data );

                samplejobinstance.handle(job)

                return true ; 
            }
        } ,
        
        {
            connection : redisConnection
        }
    )

}