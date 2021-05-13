import React from 'react'

import '../../HomePageCss/MainBodyCss/FooterAddComp.css'

function FooterAddComp({Icon,title}) {
    return (
        <div class='footerAddComp'>
              <Icon style={{ fontSize: 19 }} className='footerAddIcon'/>
              <p>{title}</p>
        </div>
    )
}

export default FooterAddComp
