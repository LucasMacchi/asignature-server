import User from "../../Database/User"
import { hashPassword } from "../Utils/passwordManagement"
import TokenValidator from "../Utils/tokenValidator"

export default async function PasswordChange(user_id:string, token_id: string, new_password: string) {
    const user = await User.findById(user_id)
    if(user && await TokenValidator(user.id, token_id, "password")){
        user.password = await hashPassword(new_password)
        await user.save()
        return true
    }
    else return false
}