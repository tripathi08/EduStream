import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import introVideo from "../../assets/videos/intro.mp4"
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useParams} from "react-router-dom"
import { getCourseLectures } from '../../redux/actions/course';
import Loader from '../Layout/Loader/Loader';

const CoursePage = ({user}) => {
    const [lectureNumber,setLectureNumber]=useState(0);
     const {lectures,loading} = useSelector(state=>state.course)
    
const dispatch=useDispatch();
const params=useParams();
useEffect(()=>{
dispatch(getCourseLectures(params.id))
},[dispatch,params.id]);


if(user.role!=='admin' && (user.subscription===undefined || user.subscription.status!=='active')){
    return <Navigate to={'/subscribe'}/>
}

  return (
    loading?<Loader/>:(
        <Grid minH={"90vh"} templateColumns={["1fr","3fr 1fr"]}>
       {
        lectures && lectures.length>0 ? (
            <>
            <Box marginLeft={"1rem"} marginTop={"4rem"}>
       <video width={"100%"} controls controlsList='nodownload noremoteplayback' disablePictureInPicture disableRemotePlayback src={lectures[lectureNumber].video.url}>
        </video>
        <Heading m={"4"} children={`#${lectureNumber+1} ${lectures[lectureNumber].title}`}/>
        <Heading m={"4"} children={"Description"}/>
        <Text m={"4"} children={lectures[lectureNumber].description}/>
       </Box> 
       <VStack border={"solid black 2px "} rounded={"lg"} paddingTop={"4"} margin={"0.25rem"}>
        {
            lectures.map((element,index)=>(
                <Button
                variant={"outline"}
                key={element._id}
                style={{
                    width:"80%",
                    padding:"1rem",
                    textAlign:"center",
                    margin:0,
                    borderBottom:"1px solid "
                }}
                onClick={()=>setLectureNumber(index)}
                >
                    <Text noOfLines={1}>
                        #{index+1} {element.title}
                    </Text>
                </Button>
            ))
        }
       </VStack>
            </>
        ):(
            <Heading mt={"100"} ml={"20"} children="No lectures available!"/>
        )
       }
    </Grid>
    )
  )
}

export default CoursePage
