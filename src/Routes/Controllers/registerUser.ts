import User from "../../Database/User"
import { hashPassword } from "../Utils/passwordManagement"

export default async function Register (email: string, username: string, password: string) {
    try {
        const user = await User.create({
            username: username,
            email: email,
            password: await hashPassword(password),
        })
        console.log(user)
        return true
    } catch (error) {
        console.log(error)
        return false
    }

}