import { Router} from "express";
import {getTask, newTasks,updateTask,deleteTask }from '../controller/todoController.js'
const todoRouter=Router()


todoRouter.post('/',newTasks)
todoRouter.get('/',getTask)
todoRouter.put('/:id',updateTask)
todoRouter.delete('/:id',deleteTask)
export default todoRouter