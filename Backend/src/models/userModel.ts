import mongoose, {Schema} from "mongoose";

//Users Model Schema
const UsersSchema = new Schema({
    email:
    {
        type:String,
        require:true,
        unique:true
    },
    username:
    {
        type:String,
        require:true,
        unique:true
    },
    password:
    {
        type:String,
        require:true,
    },
    role:
    {
        type:String,
        require:true
    },
});

export const User = mongoose.model("Users",UsersSchema);
