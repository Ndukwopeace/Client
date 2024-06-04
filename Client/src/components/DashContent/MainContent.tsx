import Profile from './Profile'
import Home from './Home'
import CoursesComponent from './Courses/CoursesComponent'

const MainContent = ({page , setPage} : any) => {

  const renderMyContent = () : any => {

        switch (page) {
          case "courses":
            return  <CoursesComponent page={page} setPage={setPage}/>
            default :
            return <Home page={page} setPage={setPage}/> 
          }
  }
  return (
<<<<<<< HEAD
    <div className=' bg-[#F5F5F5] col-span-5 flex flex-col '>

=======
    <div className=' bg-[#F5F5F5] col-span-5 flex flex-col max-h-screen overflow-scroll'>
>>>>>>> NdukwoPeace
      <Profile/>
      {renderMyContent()}

    </div>
  )
}

export default MainContent