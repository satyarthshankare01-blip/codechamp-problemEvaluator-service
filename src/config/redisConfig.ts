import serverConfig from  "./serverConfig.js" ;

import Redis from "ioredis";

const redisConfig = {

    port : serverConfig.REDIS_PORT,
    host : serverConfig.REDIS_HOST
};

const redisConnection = new Redis(redisConfig);

export default redisConnection ;

