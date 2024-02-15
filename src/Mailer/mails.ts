import mail_transponder from "./mailTransponder";
import { mail_config } from "./mailTransponder";

export async function emailTest(email: string) {
    await mail_transponder.sendMail({
        from:mail_config.auth.user,
        to: email,
        subject: "TESTING EMAIL",
        text:"TEST EMAIL",
    })
}