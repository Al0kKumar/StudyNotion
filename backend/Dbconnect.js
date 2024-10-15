import mongoose from 'mongoose'

const connectDB = async () => {
  
    try {
        await mongoose.connect(process.env.MONGO_URL)
        
    } catch (err) {
        console.error('Mongo connection error', err);   
    }
};

export default connectDB