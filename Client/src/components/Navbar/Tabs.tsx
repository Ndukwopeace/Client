import { Box } from '@chakra-ui/react'
import React from 'react'


import tabsProps from '../../interfaces/Tabs.interface'
import { NavLink } from 'react-router-dom';


const Tabs = (tabsProps: tabsProps) => {
    const { data } = tabsProps;

    return (
        <NavLink to={data.link}
            className={({ isActive }) =>
                isActive ? "active" : ""}
        >

            <Box className='flex gap-3 items-center rounded-md hover:cursor-pointer active:border  active:rounded-md pt-[0.4rem] pb-[0.4rem] pl-4'
            // style={{ background: page == 'home' ? "#4C847B" : "inherit" }}
            >
                {data.icons} {data.tab}
            </Box>
        </NavLink>

    )
}

export default Tabs