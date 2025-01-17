//import mock from '../../Mocks/asigantures_mocks.json'
import Asignature from "../../Database/Asignature"
import User from "../../Database/User"
import undoneTimer from "./undoneTaskTimer"

export default async function doneTask(id: string, user_id: string) {
    try {
        const task = await Asignature.findById(id)
        const user = await User.findById(user_id)
        if(task && user){
            const index = user.UserAsignatures.findIndex( t => t.id === id )
            if(index && task){
                task.isDone = true
                user.UserAsignatures[index].isDone = true
                await task.save()
                await user.save()
                undoneTimer(user.id, task.id)
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