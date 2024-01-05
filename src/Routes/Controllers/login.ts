
export default function login(email: string, password: string): boolean {
    console.log("EMAIL: ",email)
    console.log("PASSWORD: ",password)
    if(email === "lucas@gmail.com" && password === "123") return true
    else return false
}