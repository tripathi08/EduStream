import {Box, Button, Container,FormLabel,Heading,Input,VStack} from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom";


const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
  return (
    <Container h={"95vh"}>
      <VStack h={"full"} justifyContent={"center"} spacing={"16"}>
        <Heading color={"yellow.400"} children={"Welcome to EduStream"}/>
        <form style={{width:"100%"}}>
           <Box my={"4"}>
           <FormLabel htmlFor="email" children="Email Address"/>
           <Input required id="email" value={email} onChange={e=>setEmail(e.target.value)}
            placeholder="abc@xyz.com"
            type="email"
            focusBorderColor="yellow.500"
           />
           </Box>
           <Box my={"4"}>
           <FormLabel htmlFor="password" children="Password"/>
           <Input required id="password" value={password} onChange={e=>setPassword(e.target.value)}
            placeholder="Enter Your Password"
            type="password"
            focusBorderColor="yellow.500"
           />
           </Box>
           <Box>
            <Link to="/forgotpassword">
               <Button fontSize={"sm"} variant={"link"}>
                Forgot Password?
               </Button>
            </Link>
           </Box>
           <Button my={"4"} colorScheme="yellow" type="submit">
            Login
           </Button>
           <Box my={"4"}>
            New User? <Link to="/register"><Button colorScheme="yellow" variant={"link"}>Sign Up</Button></Link>
           </Box>
        </form>
      </VStack>
    </Container>
  )
}

export default Login
