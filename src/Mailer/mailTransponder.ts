import nodemailer from "nodemailer";
import * as dotenv from "dotenv"
dotenv.config()

const sender_email = process.env.SENDER_EMAIL ? process.env.SENDER_EMAIL : "not email provided"
const sender_password = process.env.SENDER_PASSWORD ? process.env.SENDER_PASSWORD : "not password provided"

export const mail_config = {
    service: "Zoho",
    host: 'smtp.zoho.com',
    port: 587,
    auth: {
        user: sender_email,
        pass: sender_password
    },
    secure: false,
}

const mail_transponder = nodemailer.createTransport(mail_config)

export default mail_transponder