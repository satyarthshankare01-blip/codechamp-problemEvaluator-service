import express from 'express';
import bodyParser from "body-parser";
import type { Express } from 'express';
import serverConfig from "./config/serverConfig.js";
import apiRouter from "./routes/index.js";
import sampleWorker from './workers/sampleWorker.js';
import serverAdapter from './config/bullBoardConfig.js';
const app: Express = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.text());


app.use('/api' , apiRouter )

app.use('/ui', serverAdapter.getRouter());

app.listen(serverConfig.PORT , () => {
  console.log(`SERVER STARTED AT PORT ${serverConfig.PORT}`);
     
  sampleWorker('sampleQueue');
  
  /*sampleProducer( 'sampleJob' , {
    name: "Sanket",
    company: "Microsoft",
    position: "SDE 2 L61",
    locatiion: "Remote | BLR | Noida"
  })*/

});