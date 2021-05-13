import React from 'react'

//Here Importing material-UI Component
import { Avatar } from '@material-ui/core'

//here Importing CSS File
import '../HomePageCss/SidebarMembers.css'

function SidebarMembers({name,role,src}) {
    return (
        <div className='sidebarMembers'>
            <Avatar className='Avatar_logo' src={src}/>
            <div className='sidebarMembers_title'>
                    <h4>{name}</h4>
                    <p>{role}</p>
            </div>
            
        </div>
    )
}

export default SidebarMembers
