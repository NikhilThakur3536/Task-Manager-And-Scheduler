import mongoose, {Schema} from "mongoose";

//Tasks Model Schema
const  TasksSchema = new Schema({
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
    Details:
    {
        type:String,
    }
})

export const Tasks = mongoose.model("Tasks",TasksSchema);