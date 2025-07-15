import express from 'express'
import { PORT } from './config/env.js'
import connectToDb from './database/mongodb.js'
import todoRouter from './router/tasks.routes.js'

const app=express()

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Welcome to the app")
})

app.use('/todo',todoRouter)

app.listen(PORT,async ()=>{
    console.log(`Server listening on port:${PORT}`)
    await connectToDb();
})