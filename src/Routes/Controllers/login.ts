import { checkPassword } from "../Utils/passwordManagement"
import User from "../../Database/User"
import { IUser } from "../../Interface/interfaces"

export default async function login(email: string, password: string): Promise<IUser> {
    console.log("EMAIL: ",email)
    console.log("PASSWORD: ",password)
    let user: IUser = {
        email: "",
        username: "",
        createdAt: new Date,
        user_id: ""
    }
    try {
        const userToLog = await User.findOne({email: email})
        const result = await checkPassword(password, userToLog?.password)
        if(result && userToLog?.email && userToLog.username){
            user.email = userToLog.email
            user.username = userToLog.username
            user.createdAt = userToLog.createdAt
            user.user_id = userToLog.id
            return user
        }
        else{
            return user
        }
    } catch (error) {
        console.log(error)
        return user
    }

}