import User from "../../Database/User"
import TokenValidator from "../Utils/tokenValidator"

export default async function Activate (token_id: string, user_id: string){
    const user = await User.findById(user_id)
    if(user && await TokenValidator(user_id, token_id, "validation")){
        user.isActivated = true
        await user.save()
        return true
    }
    else{
        return false
    }

}