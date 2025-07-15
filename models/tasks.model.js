import mongoose, { model } from 'mongoose'
var Schema = mongoose.Schema


const taskSchema=new Schema({
  task:{
    type:String,
    required:[true,"add your todo list here"],
    trim:true
  },
  completed:{
    type:Boolean,
    default:false
  }
})

const taskModel=new model('taskSchema',taskSchema)

export default taskModel