//imports
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import * as dotenv from "dotenv"
import test_route from './Routes/Utils/test_route';
import { router } from './Routes';
//Server creation
dotenv.config()
const port: number = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 0;
const server = express();


//Middlewares
server.use(morgan("dev"));
server.use(bodyParser.json())
server.use(cookieParser())

//Ping
server.get("/ping",(_req, res) => {
    res.send(test_route('General'))
})

server.use('/',router)

export default function(): void {
    try {
        if(port === 0) throw new Error("PORT ERROR")
        server.listen(port, () => console.log("----------------SERVER IS UP AT PORT "+port+"----------------"))    
    } catch (error) {
        console.log("An error had happen trying to connect the Server: ",error)
    }

}

