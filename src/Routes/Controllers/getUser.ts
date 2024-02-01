import User from "../../Database/User"

export default async function getUser (email: String) {
    try {
        const user = await User.findOne({email: email})
        if(user){
            const response = {
                email: user.email,
                username: user.username,
                id: user.id,
                createdAt: user.createdAt
            }
            return response
        }
        else return false
    } catch (error) {
        console.log(error)
        return false
    }

}