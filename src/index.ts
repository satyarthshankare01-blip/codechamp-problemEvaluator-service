import express from 'express';
import type { Express , Request , Response } from 'express';
import serverConfig from "./config/serverConfig.js";
import apiRouter from "./routes/index.js";
import sampleWorker from './workers/sampleWorker.js';
import sampleProducer from "./producer/sampleQueueProducer.js"
import serverAdapter from './config/bullBoardConfig.js';
const app: Express = express();

app.use('/api' , apiRouter )

app.use('/ui', serverAdapter.getRouter());

app.listen(serverConfig.PORT , () => {
  console.log(`SERVER STARTED AT PORT ${serverConfig.PORT}`);
     
  sampleWorker('sampleQueue');
  
  sampleProducer( 'sampleJob' , {
    name: "Sanket",
    company: "Microsoft",
    position: "SDE 2 L61",
    locatiion: "Remote | BLR | Noida"
  })

});