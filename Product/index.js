import express from "express";

const app = express();

app.use(express.json());

app.use('/',(req, res, next) => {
    return res.status(200).json({"message":"Hello from Product"})
})

app.listen(8002, () => {
    console.log("Product is reading on Port 8002")
})