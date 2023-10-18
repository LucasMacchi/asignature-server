//Routes imports
import { user_router } from "./userRoutes";

//Router declaration
import { Router } from "express";
export const router = Router()

//Routes
router.use('/user', user_router)