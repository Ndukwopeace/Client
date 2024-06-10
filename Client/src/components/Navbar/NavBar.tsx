import { useState } from 'react'
import { Box, Button, Image, StackDivider, VStack } from '@chakra-ui/react'
import smallLogo from '../../assets/images/Group.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { MdChat, MdDashboard, MdOutlineLogout } from 'react-icons/md'
import { FaRegCalendar, FaRegFile, FaRegUser } from 'react-icons/fa6'
import { FiMessageSquare } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import sideBarData from '../../../Data/sideBarData/sideBarData'
import Tabs from './Tabs'



const NavBar = () => {

    const rest = sideBarData.slice(5);
    console.log(rest);

    const navigate = useNavigate();

    return (
        <Box bg={"#05253A"} color={"white"}
            className='text-white border border-black flex flex-col items-center pt-3 gap-[1.5rem] min-h-screen ' >
            {/* Logo */}
            <Image src={smallLogo} className='h-[3rem]' />

            <VStack
                className=' w-[80%] text-sm tracking-wide'
                divider={<StackDivider borderColor={'grey.200'} />}
                spacing={3}
                align='stretch'
            >
                {sideBarData?.slice(0, 5).map((data) => {
                    return <Tabs data={data} />
                })}

                <Box className='flex flex-col'>
                    {
                        rest?.map((data) => {
                            return <Box className='flex gap-3 items-center hover:cursor-pointer hover:border hover:rounded-md pt-[0.4rem] pb-[0.4rem] pl-4 '>
                                {data.icons}{data.tab}
                            </Box>
                        })
                    }
                    <Button background={"#E2DDBF"} height={"2.3rem"} marginTop={"0.7rem"} onClick={() => navigate('/')}>
                        <MdOutlineLogout className='mr-[0.4rem]' /> Log Out
                    </Button>
                </Box>
            </VStack>
        </Box>
    )
}

export default NavBar