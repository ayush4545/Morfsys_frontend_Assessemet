import React from 'react'

import '../../HomePageCss/MainBodyCss/CardType2.css'

function CardType2({src,title,desc}) {
    return (
        <div className='cardType2'>
              <img src={src} alt='Card Logo' className='cardImage'/>
              <div className="cardTitle">
                  <h4>{title}</h4>
                  <p>{desc}</p>
              </div>
        </div>
    )
}

export default CardType2
