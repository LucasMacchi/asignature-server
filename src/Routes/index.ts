//Routes imports
import { user_router } from "./userRoutes";
import { task_router } from "./taskRoutes";
import cors from 'cors'
//Router declaration
import { NextFunction, Router, Request, Response } from "express";
export const router = Router()
import { accountCreated, emailTest } from "../Mailer/mails";

//other middlewares
router.use(cors())

//Routes
router.use('/user', user_router)
router.use('/task', task_router)
router.get('/test/email/:email', async (req, res) => {
  await accountCreated(req.params.email, "dads", "gggg")
  res.send("EMAIL SENT")
})

//error handler
router.use((err: any, _req: Request, res: Response, _next:NextFunction) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
      error: {
        message: err.message,
      },
    });
  });

