import { Router } from "express";
export const task_router = Router()

//Controller imports
import allTasks from "./Controllers/allTasks";
import deleteTask from "./Controllers/deleteTask";
import doneTask from "./Controllers/doneTask";
import unDoneTask from "./Controllers/unDoneTask";
import expireTask from "./Controllers/expireTask";
import addTask from "./Controllers/addTask";
import JWTAuth from "./Controllers/jwtAuthVerification";

//Utils imports
import test_route from "./Utils/test_route";
import errorTest from "./Utils/errorTest";

//User ping
task_router.get('/ping', (_req, res) => res.send(test_route('Task')))
task_router.get('/error', (_req, res) => res.send(errorTest()))


//Routes
task_router.get('/all/:id',JWTAuth, async (req, res) => {
    const user_id = req.params.id
    res.json(await allTasks(user_id))
})
task_router.delete('/delete',JWTAuth, async (req, res) => {
    const {task_id,user_id} = req.body
    res.send(await deleteTask(task_id,user_id))
})
task_router.patch('/done',JWTAuth, async (req, res) => {
    const {task_id,user_id} = req.body
    res.send(await doneTask(task_id, user_id))
})
task_router.patch('/undone',JWTAuth, async (req,res) => {
    const {task_id,user_id} = req.body
    res.send(await unDoneTask(task_id, user_id))
})
task_router.patch('/expire',JWTAuth, async (req, res) => {
    const {task_id,user_id} = req.body
    res.send(await expireTask(task_id, user_id))
})
task_router.post('/add',JWTAuth, async (req, res) => {
    const task = req.body
    res.send(await addTask(task))
})