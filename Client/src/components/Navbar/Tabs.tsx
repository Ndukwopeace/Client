import { Box } from '@chakra-ui/react'
import React from 'react'


import tabsProps from '../../interfaces/Tabs.interface'


const Tabs = (tabsProps: tabsProps) => {
    const {data} = tabsProps; 
    return (
        <Box>
            <Box className='flex gap-3 items-center rounded-md hover:cursor-pointer active:border  active:rounded-md pt-[0.4rem] pb-[0.4rem] pl-4' 
            // style={{ background: page == 'home' ? "#4C847B" : "inherit" }}
            >
               {data.icons} {data.tab}
            </Box>
        </Box>
    )
}

export default Tabs