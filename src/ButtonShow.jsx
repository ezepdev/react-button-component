import React from 'react'
import './styles/ButtonShow.css'

function ButtonShow({label,button}) {
    return (
        <div>
            <p className="button_show_label">{label}</p>
            {button}  
        </div>
    )
}

export default ButtonShow
