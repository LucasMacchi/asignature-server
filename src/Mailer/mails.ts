import mail_transponder from "./mailTransponder";
import { mail_config } from "./mailTransponder";
import path from "path";
import fs from "fs"
import * as dotenv from "dotenv"
dotenv.config()

const server_url = process.env.SERVER_URL ? process.env.SERVER_URL : "invalid server url"
const client_url = process.env.CLIENT_URL ? process.env.CLIENT_URL : "invalid client url"


export async function emailTest(email: string) {
    await mail_transponder.sendMail({
        from:mail_config.auth.user,
        to: email,
        subject: "TESTING EMAIL",
        text:"TEST EMAIL",
    })
}

export async function accountCreated(email: string, user_id: string, token_id: string) {
    const url = server_url+"/user/activate/"+user_id+"/"+token_id

    const filePath = path.join(__dirname,"..", "..", 'html', 'accountCreation.html');
    let accountCreated_html = fs.readFileSync(filePath, "utf-8")
    accountCreated_html = accountCreated_html.replace("URL_LINK", url)

    await mail_transponder.sendMail({
        from:mail_config.auth.user,
        to: email,
        subject: "Account Created Succesfully",
        text:"",
        html: accountCreated_html
    })
}

export async function passwordMail(user_email:string, user_id: string, token_id: string) {
    const url = client_url+"/prestoration/"+user_id+"/"+token_id
    const filePath = path.join(__dirname,"..", "..", 'html', 'passwordRestoration.html');
    let passres_html = fs.readFileSync(filePath, "utf-8")
    passres_html = passres_html.replace("URL_LINK", url)

    await mail_transponder.sendMail({
        from:mail_config.auth.user,
        to: user_email,
        subject: "Password Change Request",
        text:"",
        html: passres_html
    })

}