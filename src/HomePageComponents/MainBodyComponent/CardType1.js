import React from 'react'

//Here Importing Material-UI Component
import { Avatar } from '@material-ui/core'

//Here Importing Required CSS File
import '../../HomePageCss/MainBodyCss/CardType1.css'

function CardType1({Icon1,text1,Icon2,text2,date,title,level,src,plusSign}) {
    return (
        <div className='card1'>
            <h4>{title}</h4>
            <div className={`${level} levelDiv`}>{level}</div>
            <div className='card1_image'>
                <div className='card1_image_1'>
                    <Icon1 className='card_icon'/>
                    <p>{text1}</p>
                </div>
                <div className='card1_image_1'>
                    <Icon2 className='card_icon'/>
                    <p>{text2}</p>
                </div>
            </div>
            <div className='card1_image_text_1'>
                {plusSign ? <div className='avatar1'>+</div>: <Avatar className='avatar' src={src} />}
                <p>{date}</p>
            </div>
        </div>
    )
}

export default CardType1
