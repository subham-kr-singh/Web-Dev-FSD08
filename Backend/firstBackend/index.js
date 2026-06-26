import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import AuthRouter from './src/routers/auth.route.js';
import PublicRouter from './src/routers/public.route.js';
import connectDB from './src/config/dbConnection.config.js';

const app = express();

const port = process.env.PORT || 5000;

// middleware 
app.use(express.json());

// Routers
app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);


// Default Error handler
app.use((err, req, res, next) => {
    const ErrMessage = err.message || "Internal Server Error";
    const ErrStatusCode = err.statusCode || 500;

    res.status(ErrStatusCode).json({ message: ErrMessage });
})

// Default API
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my first backend Project" });
});

app.use((req, res) => {
    res.status(404).json({
        message: "API not found"
    })
})

app.listen(port, () => {
    console.log(`Server listen at http://localhost:${port}`);
    connectDB();
});