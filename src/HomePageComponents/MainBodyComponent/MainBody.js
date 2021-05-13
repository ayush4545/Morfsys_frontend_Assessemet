import React from 'react'

//Here Importing Required CSS File
import '../../HomePageCss/MainBodyCss/MainBody.css'

//Here Importing the Required Component
import Header from './Header'
import Body from './Body'
function MainBody() {
    return (
        <div className='mainBody'>
            <Header />
            <Body />
        </div>
    )
}

export default MainBody
