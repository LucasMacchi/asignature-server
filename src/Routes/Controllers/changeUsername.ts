import User from "../../Database/User"

export default async function ChangeUsername(user_id: string, new_username: string): Promise<boolean> {
    try {
        const user = await User.findById(user_id)
        if(user){
            user.username = new_username
            await user.save()
            return true
        }
        else return false
    } catch (error) {
        console.log(error)
        return false
    }
}