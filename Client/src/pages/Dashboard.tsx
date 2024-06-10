import { Box } from '@chakra-ui/react';
import NavBar from '../components/Navbar/NavBar';
import MainContent from '../components/DashContent/MainContent';






const Dashboard = () => {
  return (
    <Box className='grid grid-cols-6'>

      <NavBar />
      <MainContent />
      
    </Box>
  )
}

export default Dashboard