//import mock from '../../Mocks/asigantures_mocks.json'
import Asignature from "../../Database/Asignature"
import User from "../../Database/User"

export default async function deleteTask(id: string, user_id: string) {
    try {
        const task = await Asignature.findById(id)
        const user = await User.findById(user_id)
        if(task && user){
            const index = user.UserAsignatures.findIndex( t => t.id === id )
            console.log(index)
            if(index !== null || index !== undefined){
                await Asignature.findByIdAndDelete(id)
                user.UserAsignatures.splice(index,1)
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