import React from 'react'
import Profile from './Profile'
import Home from './Home'

const MainContent = () => {
  return (
    <div className=' col-span-5 flex flex-col '>
      <Profile/>
      <Home/>

    </div>
  )
}

export default MainContent