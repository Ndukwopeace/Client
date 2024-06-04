import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../../assets/Styles/LoginPage.css"
import logo from '../../assets/images/Seven Kids Code logo.png'
import LoginForm from '../../components/Forms/LoginForm'
import { Box, Image } from '@chakra-ui/react'
const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className=' h-screen main flex flex-col items-center pt-[4rem] justify-between pb-5'>
      <Box className=' main flex flex-col items-center xl:gap-[3rem] 2xl:gap-[6.3rem] '>
          <Box>
          <Image src={logo} className='h-[4rem] w-[22rem]'/>
          </Box>

          <LoginForm/>

      </Box>

    <Box  color={'white'} className='text-sm font-semibold' >
      Privacy policy disclaimer.
    </Box>
    </div>
    </>
  )
}

export default LoginPage