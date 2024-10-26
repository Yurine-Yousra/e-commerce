import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
//import AdminRoutes from './Routes/AdminRoutes.js'
//import UserRoutes from './Routes/UserRoutes.js'
import ProductRoutes from './Routes/ProductRoutes.js'
import AuthRoutes from './Routes/AuthRoutes.js'





dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use('/' , AuthRoutes)
app.use('/product' , ProductRoutes)



// CORS configuration


// Middleware
app.use(cors({
    origin:"*",
      methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

const PORT = process.env.PORT || 3000; // Provide a default port
const URL = process.env.DATA_BASE_URL;

const ConnectToDataBase = async () => {
    try {
        await mongoose.connect(URL);
        console.log("You are connected successfully to your database");
    } catch (error) {
        console.log("Database connection error:", error);
    }
};

// Start the server
app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
    ConnectToDataBase();
});
