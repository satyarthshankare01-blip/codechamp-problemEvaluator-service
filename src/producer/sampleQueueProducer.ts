import sampleQueue from "../queues/samplequeue.js";

export default async function (name : string , payload: Record<string , unknown>  ){
      await sampleQueue.add( name , payload);
      console.log( " successfully added a new job ");

}

