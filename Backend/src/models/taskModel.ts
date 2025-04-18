import mongoose, {Schema} from "mongoose";
import { rule } from "postcss";

//Tasks Model Schema
const  TasksSchema = new Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId,
         ref: 'User', 
         required: true,
    },
    Task:
    {
        type:String,
        require:true,
    },
    EndDate:
    {
        type:Date,
        require:true,
    },
    Description:
    {
        type:String,
        require:true,
    },
    Priority:
    {
      type:String,  
    }
})

export const Tasks = mongoose.model("Tasks",TasksSchema);