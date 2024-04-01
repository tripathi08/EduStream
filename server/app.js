import express from "express";
import {config} from "dotenv";
import course from "./routes/course.routes.js"
import user from "./routes/user.routes.js"
import payment from "./routes/payment.routes.js"
import other from "./routes/other.routes.js"
import ErrorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";
import cors from "cors"

config({
 path:"./config/config.env"
});

const app=express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}))
app.use(cookieParser());
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true,
    methods:["GET","POST","PUT","DELETE"]
}))

app.use("/api/v1",course);
app.use("/api/v1",user);
app.use("/api/v1",payment);
app.use("/api/v1",other);


export default app;

app.get("/", (req, res) =>
  res.send(
    `<h1>Site is Working. click <a href=${process.env.FRONTEND_URL}>here</a> to visit frontend.</h1>`
  )
);

app.use(ErrorMiddleware);