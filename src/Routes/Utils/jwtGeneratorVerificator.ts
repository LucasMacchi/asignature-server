import jwt, { JwtPayload } from 'jsonwebtoken';
import * as dotenv from "dotenv"
dotenv.config()

const secret_key: string = process.env.JWT_SECRET_KEY || "warmonger"
const seconds_to_expire: number = process.env.JWT_SECONDS_EXPIRE ? parseInt(process.env.JWT_SECONDS_EXPIRE) : 3600

export function generateJWT (user_id: string): string {
    console.log("jwt created - expire in "+seconds_to_expire+" seconds")
    return jwt.sign({user_id}, secret_key, {expiresIn: seconds_to_expire})
}

export function verify (token: string): boolean | JwtPayload | string {
    try {
        return jwt.verify(token, secret_key)
    } catch (error) {
        console.log(error)
        return false
    }
}