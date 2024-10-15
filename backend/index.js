import express from 'express';
import userRoutes from './routes/userRoutes.js'; 
import connectDB from './Dbconnect.js';
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/v1/users', userRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`server is running on Port ${PORT}`);
    
})
