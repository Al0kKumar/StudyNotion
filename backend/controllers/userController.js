import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {z} from 'zod'
import User from '../DbModels/userModel.js'


const signupSchema = z.object({
    firstname : z.string(),
    lastname: z.string(),
    email:  z.string().email(),
    password:  z.string()
})

// ask ashwini shall i return token in signup also
const Signup = async (req,res) => {
   
    const check = signupSchema.safeParse(req.body)
    
    if(!check.success){
        return res.status(401).json({msg:"Invalid inputs"})
    }

    const { firstname, lastnamename, email, password } = req.body;

    const existingEmail = await User.findOne({email});

    if(existingEmail){
        return res.status(400).json({msg:"User already exists"})
    }

    const hashedpassword = await bcrypt.hash(password,10);

    const newuser = await User.create({firstname, lastname,email,password: hashedpassword});

    if(!newuser){
        return res.status(404).json({msg:"Error during user creation"})
    }

  return res.status(201).json({msg:"user created successfully"})

}



const loginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

const Login = async (req,res) => {

    const check = loginSchema.safeParse(req.body);

    if(!check.success){
        return res.status(401).json({msg:"zod error"})
    }

    const { email, password }  = req.body;

    const existinguser = await User.findOne({email})

    if(!existinguser){
        return res.status(401).json({msg:"User doesn't exist with this email"})
    }

    const isPasswordCorrect = await bcrypt.compare(password, existinguser.password);

    if(!isPasswordCorrect){
        return res.status(401).json({msg:"wrong password"})
    }

    const payload = {
        id: existinguser._id, 
        email:existinguser.email,
        username: existinguser.username
    }

    const token = jwt.sign(payload,process.env.JWT_SECRET, {expiresIn:'1h'});

    return res.status(200).json({msg:"Loggedin successfully", token})

}

export default { Signup, Login };