import { Box, Button, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
// import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import deleteButton from '../../../assets/images/Frame 131.png'
import checkButton from '../../../assets/images/Frame 133.png'

// import React, { useState } from 'react'
import Pagination from '../../Pagination/Pagination'
import { MdChat } from 'react-icons/md'

const CoursesTable = ({ data , currentPage,setCurrentPage,nPages}: any) => {

    
    return (
        // <TableContainer>
        // <Table variant={"simple"}>
        //     <Thead>
        //         <Tr>courseId</Tr>
        //         <Tr>courseName</Tr>
        //         <Tr>enrollmentDate</Tr>
        //         <Tr>duration</Tr>
        //         <Tr>status</Tr>
        //         <Tr>Action</Tr>
        //     </Thead>

        // </Table>
        // </TableContainer>


        <TableContainer >
            
            <Table  size='md' >
                    <TableCaption> <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} /> </TableCaption>
                <Thead bg={"#1D3A4C"} >
                    <Tr >
                        <Th textColor={'white'} >courseId</Th>
                        <Th textColor={'white'} >courseName</Th>
                        <Th textColor={'white'} >enrollmentDate</Th>
                        <Th textColor={'white'} >duration</Th>
                        <Th textColor={'white'} >status</Th>
                        <Th textColor={'white'} >Action</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {
                        data.map((data: any) => {
                            return(
                                <Tr  style={{
                                    background: data.status == 'Completed' ? "#F6F6F6": "inherit"
                                }} fontSize={"0.9rem"}>
                                    <Td px={1} >{data.courseId}</Td>
                                    <Td px={1}>{data.courseName}</Td>
                                    <Td px={1}>{data.enrollmentDate}</Td>
                                    <Td  px={1} textAlign={'left'} >{data.duration}</Td>
                                    <Td  px={1} display={'flex'} ><Text px={3} className='py-1' fontSize={'0.69rem'} borderRadius={'0.3rem'} 
                                    style={{
                                        background: data.status == 'Completed' ? "#E6F6D1": "#EEECED",
                                        color: data.status == 'Completed' ? "#27AE60": "black",
                                    }} >{data.status}</Text></Td>
                                   { 
                                   data.status == "Completed"?
                                   <Td px={1} ><Box bg={"#EEECED"} className='flex  justify-center items-center rounded w-[1.6rem] h-[1.6rem] '><MdChat size={"1.3rem"} /></Box></Td>
                                   :
                                   <Td px={1}  >
                                        <Box className='flex gap-3'>
                                        <Image src={checkButton}/>
                                   
                                         <Image src={deleteButton}/>
                                        </Box>
                                   </Td>
                                   
                                   }
                                </Tr>
                            )

                        })
                    }

                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default CoursesTable