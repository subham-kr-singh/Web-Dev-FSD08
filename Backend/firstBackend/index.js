import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();

let count = 0

app.get("/", (req, res) => {
    console.log(count)
    count++
    res.json({ message: "Welcome to my first backend Project" });
});

app.post("/login", (req, res) => {
    res.json({
        message: "Login sucessfull"
    })
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server listen at http://localhost:${port}`);
});