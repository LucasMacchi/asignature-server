//Router declaration
import { Router } from "express";
export const user_router = Router()

//Controller imports
import login from "./Controllers/login";
import Register from "./Controllers/registerUser";
import getUser from "./Controllers/getUser";
import Activate from "./Controllers/actiavateUser";
import PasswordToken from "./Controllers/passwordToken";
import PasswordChange from "./Controllers/passwordChange";
import ChangeUsername from "./Controllers/changeUsername";
import sessionVerification from "./Controllers/sessionVerification";
import JWTAuth from "./Controllers/jwtAuthVerification";
//Utils imports
import test_route from "./Utils/test_route";

//User ping
user_router.get('/ping', (_req, res) => res.send(test_route('User')))

//Routes
//Login Route
user_router.post('/login', async (req, res) => {
    const {email, password} = req.body
    const response = await login(email,password)
    response.user_id ? res.send(response) : res.status(401).send(response)
})
//Register Route
user_router.post('/register', async (req, res) => {
    const {email, username, password} = req.body
    const response = await Register(email, username, password)
    response ? res.send(response) : res.status(400).send(response)
})
//GET Verify JWT
user_router.get('/session/:jwt', async (req, res) => {
    const token = req.params.jwt
    const response = await sessionVerification(token)
    response ? res.send(response) : res.status(400).send(response)
})
//GET USER Route
user_router.get('/:email',JWTAuth, async (req, res) => {
    const email = req.params.email
    const response = await getUser(email)
    response ? res.send(response) : res.status(400).send(response)
})
//GET Activate user
user_router.get("/activate/:user/:token", async (req, res) => {
    const code = req.params.token
    const user_id = req.params.user
    const response = await Activate(code, user_id)
    response ? res.send(response) : res.status(401).send(response)
})
//POST password change validation using the user email
user_router.post("/email/password/:email", async (req, res) => {
    const email = req.params.email
    const response = await PasswordToken(email, true)
    response ? res.send(response) : res.status(401).send(response)
})
//POST password change validation using the user id
user_router.post("/password/token/:user_id",JWTAuth, async (req, res) => {
    const user_id = req.params.user_id
    const response = await PasswordToken(user_id, false)
    response ? res.send(response) : res.status(401).send(response)
})
//PATCH password change
user_router.patch("/password", async (req, res) => {
    const {user_id, token_id, new_password} = req.body
    const response = await PasswordChange(user_id, token_id, new_password)
    response ? res.send(response) : res.status(401).send(response)
})
//PATCH username change
user_router.patch("/username/:user_id/:new_username", JWTAuth, async (req, res) => {
    const user_id = req.params.user_id
    const new_username = req.params.new_username
    const response = await ChangeUsername(user_id, new_username)
    response ? res.send(response) : res.status(401).send(response)
})
