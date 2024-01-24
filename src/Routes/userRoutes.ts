//Router declaration
import { Router } from "express";
export const user_router = Router()

//Controller imports
import login from "./Controllers/login";
import Register from "./Controllers/registerUser";

//Utils imports
import test_route from "./Utils/test_route";

//User ping
user_router.get('/ping', (_req, res) => res.send(test_route('User')))

//Routes

user_router.post('/login', async (req, res) => {
    const {email, password} = req.body
    res.send(await login(email,password))
})

user_router.post('/register', async (req, res) => {
    const {email, username, password} = req.body
    const val = await Register(email, username, password)
    res.send(val)
})