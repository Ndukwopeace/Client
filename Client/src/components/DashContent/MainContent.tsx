import Profile from './Profile'
import Home from './Home'
import CoursesComponent from './Courses/CoursesComponent'
import { Route, Routes } from 'react-router-dom'

const MainContent = () => {

  return (
    <div className=' bg-[#F5F5F5] col-span-5 flex flex-col max-h-screen overflow-scroll'>
     
      <Profile />

      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='courses' element={<CoursesComponent />} />
      </Routes>

    </div>
  )
}

export default MainContent