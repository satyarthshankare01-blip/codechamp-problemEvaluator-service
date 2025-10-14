import express from 'express';
import type { Express , Request , Response } from 'express';
import serverConfig from "./config/serverConfig.js"


const app: Express = express();


app.get('/', (req: Request, res: Response) => {

  res.send('TypeScript + Express Server');
});

app.listen(serverConfig.PORT , () => {
  console.log(`SERVER STARTED AT PORT ${serverConfig.PORT}`);
});