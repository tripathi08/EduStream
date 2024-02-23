import React from 'react'
import {Heading, Stack, Text, VStack,Button, Image, Box, HStack} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import "./home.css"
import vg from "../../assets/images/bg.png"
import {CgGoogle,CgYoutube} from "react-icons/cg"
import {SiCoursera,SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"
import introVideo from "../../assets/videos/intro.mp4"
const Home = () => {
  return (
    <section className='home'>
       <div className='container'>
       <Link to={"/"}>
       <Heading textColor={"yellow.400"}>EduStream</Heading>
       </Link>
        <Stack
        direction={['column','row']}
        height="100%"
        justifyContent={['center','space-between']}
        alignItems="center"
        spacing={['16','56']}
        >
        <VStack  width={"full"} alignItems={['center','flex-end']} spacing={"8"}>
         <Heading children="LEARN FROM THE EXPERTS" size={'2xl'}/>
         <Text textAlign={["center","left"]} children="Find Valuable Content at reasonable price."
          fontSize={'xl'} fontFamily={"cursive"}
         />
         <Link to="/courses">
            <Button size={"lg"} colorScheme='yellow'>
                Explore Now
            </Button>
         </Link>
        </VStack>

        <Image className='vector-graphics' boxSize={"md"} src={vg} objectFit="contain"/>
        </Stack>
       </div>
       <Box padding={'8'} bg={"blackAlpha.800"}>
        <Heading textAlign={"center"} fontFamily={"body"} color={"yellow.400"} children="OUR BRANDS"/>
        <HStack className='brandsBanner' justifyContent={"space-evenly"} marginTop={"4"}>
         <CgGoogle/>
         <CgYoutube/>
         <SiCoursera/>
         <SiUdemy/>
         <DiAws/>
        </HStack>
       </Box>
       <div className='container2'>
        <video autoPlay muted controls controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback src={introVideo}>
        </video>
       </div>

    </section>
  )
}

export default Home
