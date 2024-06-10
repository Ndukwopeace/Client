import Header from './Header'
import MyCard from './MyCard'
import { Box } from '@chakra-ui/react'
import homeData from '../../../Data/HomeData/homeData'



const Home = () => {

  return (
    <div className=' h-[100%] flex flex-col gap-[1rem] pl-[2.5rem] pt-3'>
      <Header />
      <Box className='bg-[white] grid grid-cols-3 gap-4   py-[1rem] pl-[2rem] rounded w-[95%]'>
        {
          homeData.map((data) => {
            return (
              <MyCard data={data} />
            )
          })
        }
      </Box>

    </div>
  )
}

export default Home