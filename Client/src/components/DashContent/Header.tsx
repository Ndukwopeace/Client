import { Box, Heading, Text } from '@chakra-ui/react'
// import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {

  const { pathname } = useLocation();
  console.log(pathname);


  const renderHeader = (): any => {

    switch (pathname) {
      case '/dashboard/courses':
        return (
          <Box>

            <Heading>Courses</Heading>

            <Text className='flex items-center gap-1'><MdDashboard size={"1.3rem"} height={"1.4rem"} color='#BDBDBD' />

              <Link to={"/dashboard/home"}>
              <span className='text-[#BDBDBD] hover:underline hover:cursor-pointer '>Dashboard</span>
              </Link>
              / Courses

            </Text>
          </Box>
        )

      default:
        return <Heading>Home</Heading>

    }
  }
  return (
    <Box>
      {renderHeader()}
    </Box>
  )
}

export default Header