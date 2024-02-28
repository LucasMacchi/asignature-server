import Tokens from "../../Database/Tokens"

export default async function DeleteTokens(id: string) {
    await Tokens.deleteMany({user_id: id, type: "password"})
}