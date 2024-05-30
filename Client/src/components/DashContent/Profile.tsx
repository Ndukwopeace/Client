import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Wrap, WrapItem, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button, } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { IoMdNotifications } from 'react-icons/io'


const Profile = () => {
  return (
    <div className=' h-[11%] flex justify-end items-center pr-[2rem] py-[0.5rem]'>

        <Box className=' flex items-center gap-3' >
            <IoMdNotifications size={"1.6rem"}/>
            <p className='text-sm'>Amir Toukour</p>
            <Menu>
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo'/>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width={"1rem"} fontSize={"1.5rem"} color={"grey"} background={"transparent"} _hover={"transparent"}>
                </MenuButton>
                <MenuList>
                    <MenuItem>Chat</MenuItem>
                    <MenuItem>My Courses</MenuItem>
                    <MenuItem>settings</MenuItem>
                    <MenuItem>Reset Password</MenuItem>
                </MenuList>
                </Menu>
        </Box>

    </div>
  )
}

export default Profile