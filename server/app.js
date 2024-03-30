import express from "express";
import {config} from "dotenv";
import course from "./routes/course.routes.js"
import user from "./routes/user.routes.js"
import payment from "./routes/payment.routes.js"
import ErrorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";

config({
 path:"./config/config.env"
});

const app=express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}))
app.use(cookieParser());

app.use("/api/v1",course);
app.use("/api/v1",user);
app.use("/api/v1",payment);

export default app;

app.use(ErrorMiddleware);