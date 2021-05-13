import React from 'react'

import '../../HomePageCss/MainBodyCss/body_mini_heading.css'

function body_mini_heading({ title, Icon1, Icon2, lastColumn }) {
    return (
        <div className='heading'>
            <p>{title}</p>
            <div className='icons'>
                {lastColumn ? null : <Icon1 className='iconPlus' />}
                <Icon2 className='icon2' />
            </div>
        </div>
    )
}

export default body_mini_heading
