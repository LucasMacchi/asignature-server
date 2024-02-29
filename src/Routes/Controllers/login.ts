import { checkPassword } from "../Utils/passwordManagement"
import User from "../../Database/User"
import { IUser } from "../../Interface/interfaces"
import DeleteTokens from "../Utils/deleteTokens"
import { generateJWT } from "../Utils/jwtGeneratorVerificator"

export default async function login(email: string, password: string): Promise<IUser> {

    let user: IUser = {
        email: "",
        username: "",
        createdAt: new Date,
        user_id: "",
        jwt: ""
    }
    try {
        const userToLog = await User.findOne({email: email})
        const result = await checkPassword(password, userToLog?.password)
        if(result && userToLog?.email && userToLog.username){
            user.email = userToLog.email
            user.username = userToLog.username
            user.createdAt = userToLog.createdAt
            user.user_id = userToLog.id
            user.jwt = generateJWT(user.user_id)
            await DeleteTokens(user.user_id)
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