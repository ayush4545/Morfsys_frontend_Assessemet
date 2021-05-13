import React from 'react'

//Here Importing the Required CSS File
import '../HomePageCss/Sidebar.css';

//Here Importing Required Component
import SidebarOption from './SidebarOption'
import SidebarMembers from './SidebarMembers'

//Here Importing Required Material UI Icons
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InboxTwoToneIcon from '@material-ui/icons/InboxTwoTone';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import FlightTakeoffTwoToneIcon from '@material-ui/icons/FlightTakeoffTwoTone';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SubjectIcon from '@material-ui/icons/Subject';
function Sidebar() {
    return (
        <div className='sidebar'>
             <div className="sidebar_head">
                 <img src="https://goglobiliti.com/assets/landing-page/main/globiliti-logo2x-p-500.png"  alt="logo" className="homepageLogo"/>
                 <SubjectIcon className="menuIcon"/>
             </div>
             <div className='sidebarMainOption'>
             <SidebarOption title="Home"  Icon={HomeIcon} />
             <SidebarOption title="My Pilots"  Icon={FlightTakeoffTwoToneIcon}/>
             <SidebarOption title="Inbox"  Icon={InboxTwoToneIcon}/>
             <SidebarOption title="My Team" Icon={PeopleOutlineTwoToneIcon} />
             </div>
             <hr/>
             <div className="sidebar_head">
                 <strong className='sidebar_title'>Add Team Members</strong>
                 <AddCircleTwoToneIcon className="menuIcon"/>
             </div>
             <div className='members'>
                 <SidebarMembers name='Patricia M.' role='Teacher' src='https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'/>
                 <SidebarMembers name='Liu Yangdong' role='principal'  src='https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_960_720.png'/>
                 <SidebarMembers name='Paul Literi' role='Counselor'  src='https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'/>
                 <SidebarMembers name='Chen Ying' role='Counselor'  src='https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'/>
                 <SidebarMembers name='Justin S.' role='Teacher'  src='https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'/>
             </div>
                <hr/>
                <div className='sidebarMainOptionFooter'>
                   <SidebarOption title="Settings"  Icon={SettingsIcon} />
                    <SidebarOption title="Sign Out"  Icon={ExitToAppIcon}/>
                </div>
        </div>
    )
}

export default Sidebar
