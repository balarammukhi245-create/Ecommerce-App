import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModels.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError }from "../utils/apiError.js";

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//Route for userLogin
const loginUser = asyncHandler( async (req, res) => {
    const {email, password} = req.body;

    const user = await userModel.findOne({email});

    if (!user){
        throw new ApiError(400, "User doesn't exists")
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch){
        const token = createToken(user._id);
        res.json({success:true, token})
    }
    else{
        throw new ApiError(400, "Invalid Credentials")
    }
});


//Route for userRegister
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body;

    //checking user already exists or not
    const exists = await userModel.findOne({email});
    if(exists){
        throw new ApiError(400, "User already exists")
    }

    //validating user format and strong password
    if (!validator.isEmail(email)){
        throw new ApiError(400, "Please Enter a valid Email")
    }
    if (password.length < 8){
        throw new ApiError(400, "Please Enter a Strong Password")
    }

    //hashing user password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new userModel({
        name,
        email,
        password: hashedPassword
    })  
    const user = await newUser.save()
    const token = createToken(user._id)
    res.json({success:true, token})
})


//Rotue for admin login
const adminLogin = async (req, res) => {
    
}

export { loginUser, registerUser, adminLogin }; 