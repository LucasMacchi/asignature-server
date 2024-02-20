import User from "../../Database/User"
import Tokens from "../../Database/Tokens"

export default async function Activate (token_id: string, user_id: string){
    const user = await User.findById(user_id)
    if(user) {
        const token = await Tokens.findById(token_id)
        if(token){
            console.log(token.type, token.user_id, user.id)
            if(token.type === "validation" && token.user_id == user.id && !user.isActivated){
                user.isActivated = true
                await user.save()
                await token.deleteOne()
                return "Account validated successfully"
            }
            else return "Cannot validate, type"
        }
        else{
            return "Cannot validate your account, invalid token"
        }
    }
    else{
        return "Cannot validate your account, user doesn't exist"
    }

}