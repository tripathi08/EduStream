import { catchAsyncError } from "../middlewares/catchAsyncError.js"
import {Course} from "../models/Course.model.js"

export const getAllCourses=catchAsyncError(async (req,res,next)=>{
    const courses= await Course.find();
    res.status(200).json({
        success:true,
        courses,
    })
})