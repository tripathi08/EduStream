import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { contactUs } from '../../redux/actions/other';
import toast from 'react-hot-toast';

const Contact = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");

    const dispatch=useDispatch();
    const {loading,error,message:stateMessage}=useSelector(state=>state.other)

    const submitHandler=(e)=>{
      e.preventDefault();

      dispatch(contactUs(name,email,message))
    }

    useEffect(()=>{
      if (error) {
       toast.error(error);
       dispatch({ type: 'clearError' });
     }
   
     if (stateMessage) {
       toast.success(stateMessage);
       dispatch({ type: 'clearMessage' });
     }
   },[dispatch,stateMessage,error])

  return (
    <Container>
      <VStack h={"full"} justifyContent={"center"} spacing={"16"}>
        <Heading children="Contact Us"/>
        <form onSubmit={submitHandler} style={{width:"100%"}}>
        <Box my={"4"}>
           <FormLabel htmlFor="name" children="Name"/>
           <Input required id="name" value={name} onChange={e=>setName(e.target.value)}
            placeholder="abc"
            type="text"
            focusBorderColor="yellow.500"
           />
           </Box>
           <Box my={"4"}>
           <FormLabel htmlFor="email" children="Email Address"/>
           <Input required id="email" value={email} onChange={e=>setEmail(e.target.value)}
            placeholder="abc@xyz.com"
            type="email"
            focusBorderColor="yellow.500"
           />
           </Box>
           <Box my={"4"}>
           <FormLabel htmlFor="message" children="Message"/>
           <Textarea required id="message" value={message} onChange={e=>setMessage(e.target.value)}
            placeholder="Enter Your Message..."
            focusBorderColor="yellow.500"
           />
           </Box>
           
           <Button isLoading={loading} my={"4"} colorScheme="yellow" type="submit">
            Send Mail
           </Button>

           <Box my={"4"}>
            Request for a Course? <Link to="/request"><Button colorScheme="yellow" variant={"link"}>Click here</Button></Link>
           </Box>
           
        </form>
      </VStack>
    </Container>
  )
}

export default Contact
