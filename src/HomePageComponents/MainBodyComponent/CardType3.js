import React from 'react'

//Here Importing the Material-UI Icons
import { Avatar } from '@material-ui/core'

//Here Importing the Required CSS File
import '../../HomePageCss/MainBodyCss/CardType3.css'

function CardType3({ title, level, text1, text2, Icon1, Icon2, Rupees_per_year, tag1, tag2, tag3, levelcheck, tag4 }) {
    return (
        <div className='cardType3'>
            <div className='card3'>
                <h4>{title}</h4>
                <div className={`${levelcheck} && levelDiv1`}>{level}</div>
                <div className='card3_image'>
                    <div className='card3_image_3'>
                        <Icon1 className='card_icon3' style={{ fontSize: 15 }} />
                        <p>{text1}</p>
                    </div>
                    <div className='card3_image_3'>
                        <Icon2 className='card_icon3' style={{ fontSize: 17, fontWeight: 500 }} />
                        <p>{text2}</p>
                    </div>
                </div>
                <div className='card3_image_text_3'>
                    <Avatar className='avatar' src='https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png' />
                    <p>{Rupees_per_year}</p>
                </div>
            </div>
            <div className='cardType3_tags'>
                <li>{tag1}</li>
                <li>{tag2}</li>
                <li>{tag3}</li>
                {tag4 && <li>{tag4}</li>}
            </div>
        </div>
    )
}

export default CardType3
