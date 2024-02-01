import Asignature from "../../Database/Asignature"
import User from "../../Database/User"


export default async function unDoneTask(id: string, user_id: string) {
    try {
        const task = await Asignature.findById(id)
        const user = await User.findById(user_id)
        if(task && user){
            const index = user.UserAsignatures.findIndex( t => t.id === id )
            const task = await Asignature.findById(id)
            if(index && task){
                task.isDone = false
                user.UserAsignatures[index].isDone = false
                await task.save()
                await user.save()
                return true
            }
            else return false
        }
        else return false
    } catch (error) {
        console.log(error)
        return false
    }
}