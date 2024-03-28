import express from "express";
import {config} from "dotenv";
import course from "./routes/course.routes.js"
import user from "./routes/user.routes.js"
import ErrorMiddleware from "./middlewares/Error.js";

config({
 path:"./config/config.env"
});

const app=express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}))

app.use("/api/v1",course);
app.use("/api/v1",user);

export default app;

app.use(ErrorMiddleware);