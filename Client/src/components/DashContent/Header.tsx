import { Box, Heading, Text } from '@chakra-ui/react'
// import React from 'react'
import { MdDashboard } from 'react-icons/md'

const Header = ({ page , setPage}: any) => {

  

  const renderHeader = (): any => {
    switch (page) {

      case "courses":
        return (
          <Box>
            <Heading>Courses</Heading>
            <Text className='flex items-center gap-1'><MdDashboard size={"1.3rem"} height={"1.4rem"} color='#BDBDBD' /><span className='text-[#BDBDBD] hover:underline hover:cursor-pointer ' onClick={()=>setPage("home")}>Dashboard</span> / Courses</Text>
          </Box>
        )
      default:
        return <Heading>Home</Heading>
    }
  }
  return (
    <div>
      {renderHeader()}
    </div>
  )
}

export default Header