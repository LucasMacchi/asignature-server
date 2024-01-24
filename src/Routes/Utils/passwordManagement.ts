import bcrypt from "bcrypt";
import * as dotenv from "dotenv"
dotenv.config()
const salts: number = process.env.ENCRYPT_SALTS ? parseInt(process.env.ENCRYPT_SALTS) : 10


export const hashPassword = async (passwordToHash: string) => {
    const gen = await bcrypt.genSalt(salts, "a")
    const hashedPassword = await bcrypt.hash(passwordToHash, gen)
    return hashedPassword
}


