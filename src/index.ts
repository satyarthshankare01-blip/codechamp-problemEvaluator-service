import express from 'express';
import type { Express , Request , Response } from 'express';
import serverConfig from "./config/serverConfig.js"
import apiRouter from "./routes/index.js"

const app: Express = express();

app.use('/api' , apiRouter )

app.get('/', (req: Request, res: Response) => {

  res.send('TypeScript + Express Server');
});

app.listen(serverConfig.PORT , () => {
  console.log(`SERVER STARTED AT PORT ${serverConfig.PORT}`);
});