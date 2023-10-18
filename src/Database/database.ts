import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

//Models
import User from './Models/User';
import License from './Models/License';
import Vehicle from './Models/Vehicle';

//ENV VARIABLES
dotenv.config()
const dbUser: string = process.env.DB_USER ? process.env.DB_USER : "no user";
const dbPassword: string = process.env.DB_PASSWORD ? process.env.DB_PASSWORD : "no password";
const dbHost: string = process.env.DB_HOST ? process.env.DB_HOST : "no hostname";
const dbName: string = process.env.DB_NAME ? process.env.DB_NAME : "no name";
const dbPort: number = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 0;
const nodeEnv: string = process.env.NODE_ENV ? process.env.NODE_ENV : "no node env";

//This function will create and track the creation of the tables in the database
const createTables = (database: Sequelize) => {
    User(database)
    console.log("----------------USER TABLE CREATED----------------")
    License(database)
    console.log("----------------LICENSE TABLE CREATED----------------")
    Vehicle(database)
    console.log("----------------VEHICLE TABLE CREATED----------------")

    //Model Assiociations
    const UserModel = database.models.User
    const LicenseModel = database.models.License
    const VehicleModel = database.models.Vehicle

    UserModel.hasOne(LicenseModel, {
        foreignKey: "dni"
    })

    UserModel.hasMany(VehicleModel, {
        foreignKey: "dni"
    })
    
    console.log("----------------TABLES ASSOCIATED CREATED----------------")
}

//This function will create the connexion to the database
export default async function(): Promise<void>{
    let connexion: Sequelize | null;
    
    try {
        switch(nodeEnv){
            case "PRODUCTION":{
                console.log("----------------PRODUCTION MODE----------------");
                connexion = new Sequelize({
                    database:dbName,
                    dialect: "postgres",
                    host: dbHost,
                    port: dbPort,
                    username: dbUser,
                    password: dbPassword,
                    logging: false
                })
                createTables(connexion)
                break;
            }
    
            case "DEVELOPER":{
                console.log("----------------DEVELOPER MODE----------------");
                connexion = new Sequelize({
                    database:dbName,
                    dialect: "postgres",
                    host: dbHost,
                    port: dbPort,
                    username: dbUser,
                    password: dbPassword,
                })
                break;
            }
    
            case "DEVELOPER_LOAD": {
                console.log("----------------DEVELOPER LOAD MODE----------------");
                connexion = new Sequelize({
                    database:dbName,
                    dialect: "postgres",
                    host: dbHost,
                    port: dbPort,
                    username: dbUser,
                    password: dbPassword,
                })
                createTables(connexion)
                break;
            }
    
            default:{
                connexion = new Sequelize()
                break;
            }
    
        }
        let forceDb = false
        if(nodeEnv === "DEVELOPER_LOAD" || nodeEnv === "PRODUCTION") forceDb = true
        await connexion.sync({force: forceDb}).then(async () => {
            await connexion?.authenticate().then(() => console.log("DATABASE IS CONNECTED"))
            .catch(() => {console.log("DATABASE ERROR"); connexion?.close()})
        })
    } catch (error) {
        console.log("An error had happen trying to create and connect the Database: ",error)
    }

}