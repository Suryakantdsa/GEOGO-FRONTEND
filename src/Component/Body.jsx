import React from 'react'
import SideNavbar from './SideNavbar'
import Homepage from './Homepage'
import Navbar from './Navbar'
const Body = () => {
    return (
        <div className="w-screen h-screen">
        <Navbar/>
        <main className="flex h-[90%] justify-center">
            <SideNavbar />
            <Homepage />
        </main>
      </div>
    )
}

export default Body