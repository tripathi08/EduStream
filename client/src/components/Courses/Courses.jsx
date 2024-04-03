import React, { useEffect,useState } from 'react'
import { Container, Input,Heading, HStack, Button, Text, Stack, VStack, Image } from '@chakra-ui/react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { getAllCourses } from '../../redux/actions/course';
import {toast} from "react-hot-toast"

const Course=({views,title,imageSrc,id,addToPlaylistHandler,creator,description,lectureCount})=>{
    return(
    <VStack className='course' alignItems={['center','flex-start']}>
    <Image src={imageSrc} boxSize="60" objectFit={"contain"}/>
     <Heading
     size={"sm"}
      textAlign={["center","left"]}
       maxW={"200px"}
        fontFamily={"sans-serif"}
         noOfLines={3}
          children={title}/>
    <Text children={description} noOfLines={2}/>
    <HStack>
    <Text fontWeight={"bold"} textTransform={"uppercase"} children={"Created By:"}/>

    <Text fontFamily={"body"} textTransform={"uppercase"} children={creator}/> 
    </HStack>
    <Heading textAlign={"center"} size={"xs"} children={`No. of Lectures: ${lectureCount}`}
        textTransform={"uppercase"}
    />
    <Heading size={"xs"} children={`View: ${views}`}
        textTransform={"uppercase"}
    />
    <Stack direction={["column","row"]} alignItems={"center"}>
     <Link to={`/course/${id}`}>
        <Button colorScheme='yellow'>Watch Now</Button>
     </Link>
     <Button variant={"ghost"} colorScheme='yellow' onClick={()=>addToPlaylistHandler(id)}>Add to Playlist</Button>
    </Stack>
    </VStack>
    )
}


const Courses = () => {
    const [keyword,setKeyword]=useState("");
    const [category,setCategory]=useState("");

    const dispatch=useDispatch();

    const {loading,courses,error}=useSelector(state=>state.course)

    const addToPlaylistHandler=(courseId)=>{
        console.log("added",courseId);
    }

    const categories=[
        'Web Development',
        'Artificial Intelligence',
        'Data Structures and Algorithms',
        'App Development',
        'Data Science'
    ]

    useEffect(()=>{
      dispatch(getAllCourses(category,keyword));
       if(error){
        toast.error(error);
        dispatch({type:"clearError"})
       }
     },[category,keyword,dispatch,error])
    
  return (
    <Container minH={"95vh"}  maxW="container.lg" paddingY='8'>
      <Heading children="All Courses" m={'8'}/>
      <Input value={keyword} onChange={e=> setKeyword(e.target.value)} placeholder='Search a course...' type='text'
        focusBorderColor='yellow.500'
      />
      <HStack overflowX={'auto'} paddingY={'8'} css={{
        "&::-webkit-scrollbar":{
            display:"none"
        }
      }}>
        {
            categories.map((item,index)=>(
                <Button key={index} onClick={()=>setCategory(item)} minW={'60'}>
            <Text children={item}/>
        </Button>
            ))
        }
      </HStack>
      <Stack
      direction={['column','row']}
      flexWrap={"wrap"}
      justifyContent={["flex-start","space-evenly"]}
      alignItems={["center","flex-start"]}
      >
      {
        courses.length>0? courses.map((item)=>(
          <Course
          key={item._id}
              title={item.title}
              description={item.description}
              views={item.views}
              imageSrc={item.poster.url}
              id={item._id}
              creator={item.createdBy}
              lectureCount={item.numOfVideos}
              addToPlaylistHandler={addToPlaylistHandler}
              loading={loading}
       />
        )):(<Heading opacity={0.6} mt={"8"} children="Course Not Found!"/>)
      }
      </Stack>
    </Container>
  )
}

export default Courses
