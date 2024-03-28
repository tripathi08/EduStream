import mongoose from "mongoose";

const schema=new mongoose.Schema({

    title:{
        type:String,
        required:[true,"Please enter course title!"],
        minLength:[4,"Title must be atleast 4 characters long!"],
        maxLength:[80,"Title must be less than 80 characters!"]
    },
    description:{
        type:String,
        required:[true,"Please enter course title!"],
        minLength:[20,"Description must be atleast 20 characters long!"]
    },
    lectures:[
        {
            title:{
             type:String,
             required:true,
            },
            description:{
                type:String,
                required:true,
            },
            video:{
                public_id:{
                    type:String,
                    required:true,
                },
                url:{
                    type:String,
                    required:true,
                }
            }
        }
    ],
    poster:{
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        }
    },
    views:{
        type:Number,
        default:0,
    },
    numOfVideos:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        required:true,
    },
    createdBy:{
        type:String,
        required:[true,"Enter course creator name!"],
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }


});

export const Course=mongoose.model("Course",schema);