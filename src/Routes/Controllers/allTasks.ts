import mock from '../../Mocks/asigantures_mocks.json'
//import { IAsignature } from "../../Interface/interfaces"
import User from '../../Database/User'
import * as dotenv from "dotenv"
dotenv.config()

const mockVar: number = process.env.MOCK ? parseInt(process.env.MOCK) : 1;
const useMock: boolean = mockVar === 1 ? true : false


export default async function allTasks(user_id: string){
    try {
        if(useMock){
            return mock
        }
        else{
            const user = await User.findById(user_id)
            if(user?.UserAsignatures){
                const tasks = user.UserAsignatures.map((task) => {
                    const t = {
                        title: task.title,
                        description: task.description,
                        hour: task.hour,
                        minutes: task.minutes,
                        isDone: task.isDone,
                        isExpire: task.isExpire,
                        day: task.day,
                        isCheck: task.isCheck,
                        id: task.id
                    }
                    return t
                })
                return tasks
            }
            else return false
        }
    } catch (error) {
        console.log(error)
        return false
    }

}