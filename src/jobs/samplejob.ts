import type  { Ijob } from "../types/bullMqJobDefinition.js";

import  type { Job }  from "bullmq" ;

export default class sampleJob implements Ijob {
       
    name : string  ;
    payload : Record<string , unknown > ; 

    constructor( payload : Record<string , unknown > ){
        this.payload = payload ;
        this.name = this.constructor.name;

    }

    handle = ( job? : Job ) => {
        console.log( "Hnadler of the job called " );
        console.log(this.payload);
       
        if( job ){
            console.log( job.name , job.id , job.data)
        }


    }

    failed  = ( job? : Job ) => {

            console.log(" Jonb failed ");
            if( job ){
                console.log(job.id)
            }

    }
     

}


