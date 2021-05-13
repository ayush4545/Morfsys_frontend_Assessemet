import React from 'react'
//Here I'm Importing the CSS File
import './HomePage.css';

//Here I'm Importing the SideBar and MainBody Component
import Sidebar from './HomePageComponents/Sidebar'
import MainBody from './HomePageComponents/MainBodyComponent/MainBody'
function HomePage() {
    return (
        <div className='Homepage'>
           <Sidebar /> {/* This Component is for Sidebar */}
           <MainBody /> {/* This Component is for Right-Side Part that includes Header and Body */}
        </div>
    )
}

export default HomePage
