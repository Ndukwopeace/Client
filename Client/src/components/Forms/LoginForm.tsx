import { Box, Button, Checkbox, FormControl, HStack, Input, InputGroup, InputLeftElement, Stack, } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react'
import { Link } from 'react-router-dom';
// import Dashboard from '../../pages/Dashboard';
import { LockIcon } from '@chakra-ui/icons';
import { faArrowRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';


const LoginForm = () => {
  return (
    <Box w={'40rem'}   borderRadius={'1rem'} boxShadow='2xl' className=' flex flex-col items-center bg-[#FFFFFF] gap-4  xl:py-[2.5rem] 2xl:py-[3.5rem] '>
            <h1 className='text-3xl font-bold tracking-wide'>Login</h1>
      <form action="" className='w-[30rem] flex flex-col gap-[1rem]'>
        <FormControl >
          
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <FontAwesomeIcon icon={faUser} />
            </InputLeftElement>
            
            <Input type="email" placeholder='Username'  />
            </InputGroup>
          
        </FormControl>

        <FormControl>
        <InputGroup>
            <InputLeftElement pointerEvents='none'>
                <LockIcon />
            </InputLeftElement>
            
            <Input type="password" placeholder='Password'  />
            </InputGroup>
        </FormControl>

        <HStack className='flex justify-between' fontSize={'0.8rem'}>
          <Box >
              <Checkbox size={'sm'}> Remember Password</Checkbox>
          </Box>
          <Box >
              Forgot password ? <Link to='/dashboard' className='text-[blue]' >Click Here</Link>
          </Box>
        </HStack>
    
        <Link to='/dashboard' ><Button width={'30rem'} bg={"#4C847B"} color={"white"} padding={'1.4rem'}  >
          <FontAwesomeIcon icon={faArrowRightToBracket} className='mr-[1rem]'/>
          Login
        </Button></Link>
      </form>
    </Box>
  )
}

export default LoginForm