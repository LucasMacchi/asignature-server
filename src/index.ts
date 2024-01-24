import server from "./server";
import mongoose from "mongoose";
import * as dotenv from "dotenv"


dotenv.config()
const connection_string: string = process.env.MONGODB_CONNECTION_STRING || "NO STRING PROVIDED"

const start = async () => {
    mongoose.connect(connection_string).catch( (error: Error) => {console.log(error)})
    mongoose.connection.on("connected", () => {console.log("MongoDB database connected! at ",connection_string)})
    mongoose.connection.on("error", (error: Error) => {console.log(error)})
    server()
}

start()