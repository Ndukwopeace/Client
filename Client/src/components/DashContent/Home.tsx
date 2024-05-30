import React from 'react'
import Header from './Header'
import MyCard from './MyCard'
import { Box } from '@chakra-ui/react'
import homeData from '../../../Data/HomeData/homeData'



const Home = () => {
  console.log(homeData);
  return (
    <div className='border border-black h-[100%]'>
            <Header/>

            <Box className='grid grid-cols-3 gap-4'>
        {
          homeData.map((data) => {
            return (
              <MyCard/>
            )
          })
        }
        </Box>

    </div>
  )
}

export default Home