import React from 'react'
import Profile from './Profile'
import Home from './Home'
import CoursesComponent from './Courses/CoursesComponent'

const MainContent = ({page} : any) => {

  const renderMyContent = () : any=> {

        switch (page){
          case "courses":
            return  <CoursesComponent page={page}/>
            default :
            return <Home page={page}/> 
            
          }
  }
  return (
    <div className=' bg-[#F5F5F5] col-span-5 flex flex-col '>

      <Profile/>
      {renderMyContent()}

    </div>
  )
}

export default MainContent