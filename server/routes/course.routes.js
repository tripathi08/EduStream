import express from "express"
import { createCourse, getAllCourses } from "../controllers/course.controller.js";

const router=express.Router();

//Get all courses without lectures
router.route("/courses").get(getAllCourses);

//Create new course-only admin
router.route("/createcourse").post(createCourse)



export default router;