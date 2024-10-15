import express from 'express'
import jwt from 'jsonwebtoken'

const auth = (req,res,next) => {
   
    const authheader = req.headers['authorization']

    if(!authheader || !authheader.startsWith('Bearer ')){
        return res.status(401).json({msg:"Empty / invalid header"})
    }

    const token = authheader.split(' ')[1];


    try {
        const user = jwt.verify(token,process.env.JWT_SECRET)
    
        req.user = user;

        next();
        
    } catch (error) {
        return res.status(401).json({msg:"Invalid token", error:error.message})
    }
}

export default auth;