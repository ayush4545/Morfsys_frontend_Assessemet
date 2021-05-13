import React from 'react'

//Here Importing Required CSS File
import '../../HomePageCss/MainBodyCss/Body.css'

//Here Importing Required Component
import CardType1 from './CardType1'
import FooterAddComp from './FooterAddComp'
import CardType2 from './CardType2'
import CardType3 from './CardType3'
import Body_mini_heading from './Body_mini_heading'

//Here Importing Material-UI Component
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AttachmentIcon from '@material-ui/icons/Attachment';
import PersonIcon from '@material-ui/icons/Person';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';


function Body() {
    return (
        <div className='right_side_body'>
            <div className="column1">
                 <Body_mini_heading title='Impact Campaigns' Icon1={AddIcon} Icon2={MoreHorizIcon } />
                 <CardType1 title='Reading Comprehension' level='High' Icon1={PersonIcon} text1='Students' Icon2={AttachmentIcon} text2='3 tools' date='29 Sept - 10 Oct' src='https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_960_720.png'/>
                 <CardType1 title='Career Development' level='Medium' Icon1={PersonIcon} text1='Students' Icon2={AttachmentIcon} text2='0 tools' date='29 Sept - 10 Nov' plusSign/> 
                 <FooterAddComp Icon={AddIcon}  title='Start New Campaign'/>             
            </div>
            <div className="column1">
                 <Body_mini_heading title='Learning Tools' Icon1={AddIcon} Icon2={MoreHorizIcon } />
                 <CardType2 src='https://assets-global.website-files.com/5e69747ab37675df9b6de719/5e6ff414ee168a0e4efe4668_Paragon%20One%20Logo.png' title='Paragon One' desc='Creative thinking, +3 more' />
                 <CardType2 src='https://files.classcraft.com/classcraft-assets/favicon/apple-icon-1024x1024.png' title='Classcraft' desc='Writing composition, +1 more' />
                 <CardType2 src='https://www.brandbucket.com/sites/default/files/logo_uploads/40021/large_readtome.png' title='ReadToMe' desc='Experimental learning, +2 more' />
                 <CardType2 src='https://cdn.mos.cms.futurecdn.net/UWB63XuNTBB8ccvbEgDAxn-1200-80.jpg' title='Discovery Education' desc='Creative thinking, +10 more' />
                 <FooterAddComp Icon={AddIcon}  title='Add New tool'/>  
            </div>
            <div className="column1">
                 <Body_mini_heading title='Tool Pilots' Icon1={AddIcon} Icon2={MoreHorizIcon } />
                 <CardType3 title='ReadToMe: Houde Pilot 1' level='In Progress' levelcheck='progress' Icon1={WatchLaterIcon} text1='Fall 2020' Icon2={CheckIcon} text2='Student Pod' Rupees_per_year='¥50K/year' tag1='words-per-miute' tag2='text Completition' tag3='comprehension response' tag4='pronounciation accuracy' />
                 <CardType3 title='Paragon One: Houde Pilot 2' level='Awaiting Approval' levelcheck='awaiting' Icon1={WatchLaterIcon} text1='Fall 2020' Icon2={ClearIcon} text2='Student Pod' Rupees_per_year='¥50K/year' tag1='early career prep' tag2='college prep' tag3='experiential learning' />
                 <CardType3 title='Paragon One: Houde Pilot 2' level='Change Requested' levelcheck='requested' Icon1={WatchLaterIcon} text1='Fall 2020' Icon2={ClearIcon} text2='Student Pod' Rupees_per_year='¥50K/year' tag1='early career prep' tag2='college prep' tag3='experiential learning' />
                 <FooterAddComp Icon={AddIcon}  title='Add New tools pilots'/>  
            </div>
            <div className="column1">
              <Body_mini_heading title='Design Learning Pods' Icon1={AddIcon} Icon2={MoreHorizIcon }  lastColumn/>
              <div className="lastColumn">
                  <FooterAddComp Icon={AddIcon}  title='New Learning Pod'/> 
              </div>
            </div>
        </div>
    )
}

export default Body
