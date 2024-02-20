import mail_transponder from "./mailTransponder";
import { mail_config } from "./mailTransponder";
import path from "path";
import fs from "fs"
import * as dotenv from "dotenv"
dotenv.config()



export async function emailTest(email: string) {
    await mail_transponder.sendMail({
        from:mail_config.auth.user,
        to: email,
        subject: "TESTING EMAIL",
        text:"TEST EMAIL",
    })
}

export async function accountCreated(email: string, user_id: string, token_id: string) {
    const server_url = process.env.SERVER_URL ? process.env.SERVER_URL : "invalid server url"
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