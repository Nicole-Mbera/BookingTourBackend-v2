import express  from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import  mongoose  from "mongoose";
import userRouter from "./src/routes/userRoutes";
import tourRouter from "./src/routes/tourRoutes";


dotenv.config("./.env");
const app= express();

app.use(bodyParser.json());
app.use("/user",userRouter);
app.use("/tour", tourRouter)

app.use("/",(req,res)=> res.status(200).json({
    message: "This is Tour APi does not exist"
}));

const dbUrl=process.env.DATABASEURL;

mongoose.connect(dbUrl).then(()=> console.log("Database connected successfully"))
const port = process.env.PORT;
app.listen(port,()=>{
    console.log (`Server is running on port ${port}`)
})

export default app;
