import express from "express";

import dotenv from "dotenv";
dotenv.config()
const app = express();

const Port = process.env.PORT || 8001

app.use(express.json());

app.use('/',(req, res, next) => {
    return res.status(200).json({"message":"Hello from customer"})
})

app.listen(Port, () => {
    console.log("Customer is reading on Port 8001")
})