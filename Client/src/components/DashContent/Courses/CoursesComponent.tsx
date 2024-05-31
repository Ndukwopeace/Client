import React, { useState } from 'react'
import CoursesTable from './CoursesTable'
import Header from '../Header'
import { Box, Button, Heading } from '@chakra-ui/react'
import coursesData from '../../../../Data/CoursesData/coursesData'

const CoursesComponent = ({page , setPage} : any) => {
    console.log(coursesData);
    const [currentPage , setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(6);

    // get the index of Last record by multiplying the number of pages by the currentpage
    const indexOfLastRecord = currentPage * recordsPerPage;
    //get index of first record by substracting the number of records per page from the index of lastRecord
    const indexOfFirstRecord =  indexOfLastRecord - recordsPerPage ;
    console.log(indexOfFirstRecord)
    //  get the range of items using slice 
    const data = coursesData.slice(indexOfFirstRecord , indexOfLastRecord);
    // calculate the number of pages 
    const nPages = Math.ceil(coursesData.length / recordsPerPage);
  return (
    <div className='pl-[2rem] pt-[1rem] flex flex-col gap-7 pb-6'>
        <Header page={page} setPage={setPage}/>
        <Box className=' bg-[white]  rounded-lg py-[1.5rem] px-[2rem] flex flex-col gap-[1.5rem] w-[95%]'>
        <Box className='  flex justify-between '> 
            <Heading>List of Courses</Heading>
            <Button bg={"#4C847B"} color={"white"}> <p className='mr-[1rem]'>+</p> Request new course</Button>
        </Box>
        
        <CoursesTable data ={data} nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </Box>
    </div>
  )
}

export default CoursesComponent