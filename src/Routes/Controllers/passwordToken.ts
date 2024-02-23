import User from "../../Database/User"
import Tokens from "../../Database/Tokens"
import { passwordMail } from "../../Mailer/mails"

export default async function PasswordToken(user_id: string) {
    try {
        const user = await User.findById(user_id)
        if(!user) throw Error("User doesnt exist")
        const token = await Tokens.create({
            user_id: user.id,
            type: "password"
        })
        if(user.email) {
            await passwordMail(user.email, user.id, token.id)
            return true
        }
        else{
            return false
        }
        
    } catch (error) {
        console.log(error)
        return false
    }
}