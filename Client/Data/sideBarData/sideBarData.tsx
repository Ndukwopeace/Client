import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  FaRegCalendar, FaRegFile, FaRegUser } from 'react-icons/fa6'
import { FiMessageSquare } from 'react-icons/fi'
import {MdChat, MdDashboard} from 'react-icons/md'
const navBarData = [
    {
        tab : "Dashboard",
        icons : <MdDashboard size={'1.3rem'}/>,
        link : "/Dasboard"

    },
    {
        tab : "Courses",
        icons : <FaRegFile size={'1.3rem'}/>,
        link : "/courses"

    },

    {
        tab : "My Profile",
        icons : <FaRegUser size={"1.3rem"} />,
        link : "/myProfile"

    },
    {
        tab : "Notes",
        icons : <FiMessageSquare size={"1.3rem"} />,
        link : "/notes"

    },
    {
        tab : "Kids",
        icons : <FontAwesomeIcon icon={faAddressBook} className='h-[1.4rem]' />,
        link : "/kids"

    },
    {
        tab : "Chat",
        icons : <MdChat size={"1.3rem"} />,
        link : "/chat"

    },
    {
        tab : "Calendar",
        icons : <FaRegCalendar size={"1.3rem"} />,
        link : "/calendar"

    },
    

]

export default navBarData