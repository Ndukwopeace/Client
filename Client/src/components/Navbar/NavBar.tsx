import {useState} from 'react'
import { Box, Button, Image, StackDivider, VStack } from '@chakra-ui/react'
import smallLogo from '../../assets/images/Group.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { MdChat, MdDashboard, MdOutlineLogout } from 'react-icons/md'
import { FaRegCalendar, FaRegFile, FaRegUser } from 'react-icons/fa6'
import { FiMessageSquare } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'



const NavBar = ({setPage , page} : any) => {

    const navigate = useNavigate();

  return (
<<<<<<< HEAD
    <Box  bg={"#05253A"} color={"white"} className='text-white border border-black flex flex-col items-center pt-3 gap-[1.5rem] min-h-screen' >
=======
    <Box  bg={"#05253A"} color={"white"} className='text-white border border-black flex flex-col items-center pt-3 gap-[1.5rem] min-h-screen ' >
>>>>>>> NdukwoPeace
        {/* Logo */}
        <Image src={smallLogo} className='h-[3rem]'/>

        <VStack 
        className=' w-[80%] text-sm tracking-wide'
        divider={<StackDivider borderColor={'grey.200'} />}
        spacing={3}
<<<<<<< HEAD
        align= 'stretch'
=======
        align='stretch'
>>>>>>> NdukwoPeace
        >

        <Box  className='flex gap-3 items-center rounded-md hover:cursor-pointer hover:border hover:rounded-md pt-[0.4rem] pb-[0.4rem] pl-4'  style={{background: page == 'home'? "#4C847B" : "inherit"}}  
        onClick={()=> {setPage("home")}}>
           <MdDashboard size={"1.3rem"}/>  Dashboard
        </Box>

        <Box  className='flex gap-3 items-center rounded-md hover:cursor-pointer hover:border hover:rounded-md pt-[0.4rem] pb-[0.4rem] pl-4' onClick={()=> {setPage("courses")}} style={{background: page == 'courses'? "#4C847B" : "inherit"}} >
            <FaRegFile size={"1.3rem"}/> Courses
        </Box>
        <Box  className='flex gap-3 items-center  hover:cursor-pointer hover:border hover:rounded-md pt-[0.4rem] pb-[0.4rem] pl-4'>
        <FaRegUser size={"1.3rem"}/> My Profile
        </Box>
        <Box  className='flex gap-3 items-center hover:cursor-pointer hover:border hover:rounded-md pt-[0.4rem] pb-[0.4rem] pl-4'>
        <FiMessageSquare size={"1.3rem"}/> Notes
        </Box>
        <Box  className='flex gap-3 items-center hover:cursor-pointer hover:border hover:rounded-md pt-[0.4rem] pb-[0.4rem] pl-4'>
        <FontAwesomeIcon icon={faAddressBook} className='h-[1.4rem]'/> Kids
        </Box>
        <Box className='flex flex-col  ' >
            <Box className='flex gap-3 items-center hover:cursor-pointer hover:border hover:rounded-md pt-[0.4rem] pb-[0.4rem] pl-4 '>
            <MdChat size={"1.3rem"} /> Chat
            </Box>
            <Box className='flex gap-3 items-center hover:cursor-pointer hover:border hover:rounded-md pt-[0.4rem] pb-[0.4rem] pl-4 '>
            <FaRegCalendar size={"1.3rem"}/> Calendar
            </Box>

            <Button background={"#E2DDBF"}  height={"2.3rem"} marginTop={"0.7rem"} onClick={()=>navigate('/')}>
                <MdOutlineLogout className='mr-[0.4rem]'/> Log Out
            </Button>
        </Box>

        </VStack>

    </Box>
  )
}

export default NavBar