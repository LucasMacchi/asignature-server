import { IAsignature } from "../../Interface/interfaces"
import Asignature from "../../Database/Asignature"
import User from "../../Database/User"

export default async function addTask(task: IAsignature, user_id: string) {
    console.log("TASK CREATED: ",task)
    try {
        const user = await User.findById(user_id)
        if(user){
            const asignature = await Asignature.create({
                title: task.title,
                description: task.description,
                hour: task.hour,
                minutes: task.minutes,
                day: task.day,
                isDone: task.isDone,
                isExpire: task.isExpire,
                isCheck: task.isCheck
            })
            user.UserAsignatures.push(asignature)
            user.save()
            return true
        }
        else return false 
    } catch (error) {
        console.log(error)
        return false
    }

}