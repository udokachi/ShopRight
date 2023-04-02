import express from "express";

import dotenv from "dotenv";
dotenv.config()
const app = express();

const Port = process.env.PORT || 8003

app.use(express.json());

app.use('/',(req, res, next) => {
    return res.status(200).json({"message":"Hello from Shopping"})
})

app.listen(Port, () => {
    console.log("Shopping is reading on Port 8003")
})