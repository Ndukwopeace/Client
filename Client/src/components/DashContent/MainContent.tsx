import React from 'react'
import Profile from './Profile'
import Home from './Home'

const MainContent = () => {
  return (
    <div className='border border-black col-span-5 flex flex-col '>
      <Profile/>
      <Home/>

    </div>
  )
}

export default MainContent