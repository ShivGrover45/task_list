import mongoose from "mongoose";
import taskModel from "../models/tasks.model.js";
import express from 'express'

export const newTasks=async (req,res,next)=>{
    const session=await mongoose.startSession()

    session.startTransaction()

    try{
        console.log('DEBUG → content‑type:', req.headers['content-type']);
  console.log('DEBUG → typeof body :', typeof req.body);
  console.log('DEBUG → body value  :', req.body)
        const newTask=await taskModel.create([{
            task:req.body.task,
        }]
    )
        await session.commitTransaction()
        session.endSession()
        res.status(201).json(newTask)
    }catch(err){
         res.status(400).json({ error: err.message });
        await session.abortTransaction()
        session.endSession()
        next(err)
    }
}
    export const getTask=async (req,res,next)=>{
        const session=await mongoose.startSession()
        try{
            const getTasks=await taskModel.find().exec()
            session.endSession()
            res.json(getTasks)
        }catch(err){
            console.log(err.message)
        }
    }

    export const updateTask=async (req,res,next)=>{
        
        const {id}=req.params
        try{
            const update=await taskModel.findByIdAndUpdate({
                _id:id
            },{completed:true},{ new: true, runValidators: true })
            
            res.json(update)
        }catch(err){
            console.log(err.message)
        }
    }
    export const deleteTask= async (req,res,next)=>{
        const {id}=req.params
        try{
            const deleted=await await taskModel.findByIdAndDelete({
                _id:id,
            })
            res.sendStatus(200)
        }catch(err){
            console.log(err.message)
        }
    }

