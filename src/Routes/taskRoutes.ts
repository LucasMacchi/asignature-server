import { Router } from "express";
export const task_router = Router()

//Controller imports
import allTasks from "./Controllers/allTasks";
import deleteTask from "./Controllers/deleteTask";
import doneTask from "./Controllers/doneTask";
import unDoneTask from "./Controllers/unDoneTask";
import expireTask from "./Controllers/expireTask";

//Utils imports
import test_route from "./Utils/test_route";
import errorTest from "./Utils/errorTest";

//User ping
task_router.get('/ping', (_req, res) => res.send(test_route('Task')))
task_router.get('/error', (_req, res) => res.send(errorTest()))


//Routes
task_router.get('/all', (_req, res) => {
    res.json(allTasks())
})
task_router.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    res.send(deleteTask(id))
})
task_router.patch('/done/:id', (req, res) => {
    const id = req.params.id
    res.send(doneTask(id))
})
task_router.patch('/undone/:id', (req,res) => {
    const id = req.params.id
    res.send(unDoneTask(id))
})
task_router.patch('/expire/:id', (req, res) => {
    const id = req.params.id
    res.send(expireTask(id))
})