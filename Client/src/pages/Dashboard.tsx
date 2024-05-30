import { Box } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/Navbar/NavBar';
import MainContent from '../components/DashContent/MainContent';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className='grid grid-cols-6'>
      <NavBar/>
      <MainContent/>

    </div>
   
    </>

  )
}

export default Dashboard