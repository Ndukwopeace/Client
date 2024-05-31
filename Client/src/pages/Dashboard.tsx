import { Box } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/Navbar/NavBar';
import MainContent from '../components/DashContent/MainContent';

const Dashboard = () => {
  const navigate = useNavigate();
  const [page , setPage] = useState("home");

  return (
    <>
    <div className='grid grid-cols-6'>
      <NavBar setPage={setPage} page={page}/>
      <MainContent page={page} setPage={setPage}/>

    </div>
   
    </>

  )
}

export default Dashboard