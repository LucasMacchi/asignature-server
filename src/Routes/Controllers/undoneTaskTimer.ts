import Asignature from "../../Database/Asignature"
import User from "../../Database/User"
import * as dotenv from "dotenv"
dotenv.config()

const timer_seconds: number = process.env.SECONDS_TO_RESET_TASK ? parseInt(process.env.SECONDS_TO_RESET_TASK) : 86400

export default async function undoneTimer(user_id:string, task_id: string) {
    const seconds = timer_seconds* 1000
    setTimeout(async () => {
        const task = await Asignature.findById(task_id)
        const user = await User.findById(user_id)
        const index = user?.UserAsignatures.findIndex( t => t.id === task_id )
        if(task && user && index){
            task.isDone = false
            user.UserAsignatures[index].isDone = false
            await task.save()
            await user.save()
            console.log("TASK "+task_id+" RESET")
        }
    },seconds)
}