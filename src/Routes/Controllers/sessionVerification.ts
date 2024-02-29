import User from "../../Database/User"
import { verify, generateJWT } from "../Utils/jwtGeneratorVerificator"
import { IUser } from '../../Interface/interfaces';

export default async function sessionVerification(token:string): Promise<IUser | boolean>{
    try {
        const data: any = verify(token)

        if(data.user_id){
            const user = await User.findById(data.user_id)
            if(user && user.email && user.username){
                const response: IUser = {
                    email: user.email,
                    user_id: user.id,
                    username: user.username,
                    createdAt: user.createdAt,
                    jwt: generateJWT(user.id)
                }
                return response
            }
            else{
                return false
            }
        }
        else{
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }

}