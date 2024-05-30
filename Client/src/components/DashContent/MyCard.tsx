import React from 'react'
import { Card, CardHeader, CardBody, CardFooter ,Box , Heading , Text , Stack , StackDivider, Button, Image} from '@chakra-ui/react'
import vector1 from '../../assets/images/Vector (1).png'
import vector2 from '../../assets/images/Vector (2).png'
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2'

const MyCard= ({data}: any) => {
  
  return (
    <Card background={"#1D3A4C"} color="white" w={"18rem"} height={"14rem"} className='pt-[1rem] pl-[1.5rem] flex flex-col justify-center '>
    <Image src={vector1} className='h-7 w-6 absolute top-[2rem]' />
        <Box className=' flex flex-col gap-[1.5rem]'>
            <Heading size='xl' letterSpacing={"0.2rem"}>{data.name}</Heading>
            <Button height={"1.9rem"} width={"9rem"} fontSize={"0.8rem"} display={"flex"} gap={"0.5rem"} paddingTop={"1.1rem"} paddingBottom={"1.1rem"}>
            <HiOutlineArrowTopRightOnSquare size={"1.5rem"} />
                {data.action} 
            </Button>
        </Box>

    <Image src={vector2} className='h-[6rem] w-[14rem] absolute right-[0.1rem] bottom-[0.1rem]' />

</Card>
  )
  
}

export default MyCard