import database from "./Database/database";
import server from "./server";

const start = async () => {

    await database()
    server()
    
}

start()