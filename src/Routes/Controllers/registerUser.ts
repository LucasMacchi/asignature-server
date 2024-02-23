import User from "../../Database/User"
import Tokens from "../../Database/Tokens"
import { hashPassword } from "../Utils/passwordManagement"
import { accountCreated } from "../../Mailer/mails"


export default async function Register (email: string, username: string, password: string) {
    try {
        const user = await User.create({
            username: username,
            email: email,
            password: await hashPassword(password),
        })
        const token = await Tokens.create({
            user_id: user.id,
            type: "validation"
        })
        await accountCreated(email, user.id, token.id)
        return true
    } catch (error) {
        console.log(error)
        return false
    }

}