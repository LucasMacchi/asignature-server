import User from "../../Database/User"
import Tokens from "../../Database/Tokens"
import { TokenType } from "../../Interface/interfaces"

export default async function TokenValidator(user_id: string, token_id: string, type: TokenType): Promise<boolean> {
    const user = await User.findById(user_id)
    const token = await Tokens.findById(token_id)
    if(user && token && token.type === type && token.user_id == user.id) {
        await token.deleteOne()
        return true
    }
    else return false
}