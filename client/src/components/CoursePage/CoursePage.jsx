import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import introVideo from "../../assets/videos/intro.mp4"

const CoursePage = () => {
    const [lectureNumber,setLectureNumber]=useState(0);
    const lectures=[{
        _id:"sabccdb",
        title:"sample title",
        description:"lcacaj kkncanc kncncn",
        video:{
            url:'xsjcdjc',
        },
    },{
        _id:"sabccdb",
        title:"sample2 title",
        description:"lcacaj kkncanc kncncn",
        video:{
            url:'xsjcdjc',
        },
    },{
        _id:"sabccdb",
        title:"sample3 title",
        description:"lcacaj kkncanc kncncn",
        video:{
            url:'xsjcdjc',
        },
    },{
        _id:"sabccdb",
        title:"sample4 title",
        description:"lcacaj kkncanc kncncn",
        video:{
            url:'xsjcdjc',
        },
    }
];
  return (
    <Grid minH={"90vh"} templateColumns={["1fr","3fr 1fr"]}>
       <Box marginLeft={"1rem"} marginTop={"4rem"}>
       <video width={"100%"} controls controlsList='nodownload noremoteplayback' disablePictureInPicture disableRemotePlayback src={introVideo}>
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
    </Grid>
  )
}

export default CoursePage
