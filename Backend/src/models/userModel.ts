import mongoose, {Schema} from "mongoose";

//Users Model Schema
const UsersSchema = new Schema({
    
    id: {
        type: mongoose.Types.ObjectId,  
        unique: true,
    },
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
