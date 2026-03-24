import mongoose from "mongoose";


const userschema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true
        },
        cartData:{
            type:Object,
            default:{}
        }
    }, {
        minimize: false
    }
)

const UserModel = mongoose.models.user || mongoose.model("User", userschema);

export default UserModel;