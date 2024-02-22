import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import introVideo from "../../assets/videos/intro.mp4"
import { RiSecurePaymentFill } from 'react-icons/ri'
import termsAndCondition from "../../assets/docs/termsAndCondition"

const Founder=()=>(
    <Stack direction={["column","row"]} spacing={["4","16"]} padding={"8"}>
     
     <VStack>
        <Avatar boxSize={["40","48"]}/>
        <Text children="Founder" opacity={0.7}/>
     </VStack>
      
      <VStack justifyContent={"center"} alignItems={["center","flex-start"]}>
        <Heading children="Priyanshu Tripathi" size={["md","xl"]}/>
        <Text
        textAlign={["center","left"]}
         children={"Hi, I am a full stack developer."}/>
      </VStack>
    </Stack>
)

const VideoPlayer=()=>(
    <Box>
         <video autoPlay loop muted controls controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback src={introVideo}>
        </video>
    </Box>
)

const TnC=({termsAndCondition})=>(
    <Box>
        <Heading size={"md"} children="Terms and Conditions" textAlign={["center","left"]} my={"4"}/>
        <Box h={"sm"} p={"4"} overflowY={"scroll"}>
        <Text letterSpacing={"widest"} fontFamily={"heading"} textAlign={["center","left"]}>{termsAndCondition}</Text>
        <Heading my={"4"} size={"xs"} children="Refund only available for cancellation within 7 days."/>
        </Box>
    </Box>
)

const About = () => {
  return (
    <Container maxW={"container.lg"} padding={"16"} boxShadow={"lg"}>
    <Heading my={"2"} children="About Us" textAlign={['center','left']}/>
      <Founder/>
      <Stack m="8" direction={["column","row"]} alignItems={"center"}>
       <Text fontFamily={"cursive"} m="8" textAlign={["center","left"]}>
        We are a video streaming platform with some premium courses available only for subscribed users.
       </Text>
       <Link to="/subscribe">
        <Button variant={"ghost"} colorScheme='yellow' >
         See our plans
        </Button>
       </Link>
      </Stack>
      <VideoPlayer/>
      <TnC termsAndCondition={termsAndCondition}/>
      <HStack my={"4"} p={"4"}>
        <RiSecurePaymentFill/>
        <Heading size={"xs"} fontFamily={"sans-serif"} textTransform={"uppercase"} children="Payment is secured by Razorpay"/>
      </HStack>
    </Container>
  )
}

export default About
