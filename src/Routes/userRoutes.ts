//Router declaration
import { Router } from "express";
export const user_router = Router()

//Controller imports

//Utils imports
import test_route from "./Utils/test_route";

//User ping
user_router.get('/ping', (_req, res) => res.send(test_route('User')))

//Routes