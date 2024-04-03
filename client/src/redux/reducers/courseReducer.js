import { createReducer } from "@reduxjs/toolkit";

export const courseReducer= createReducer({courses:[]},builder=>{
    builder
    .addCase('allCoursesRequest',(state)=>{
        state.loading=true;
    })
    .addCase('allCoursesSuccess',(state,action)=>{
        state.loading=false;
        state.courses=action.payload;
    })
    .addCase('allCoursesFail',(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    })
    

})