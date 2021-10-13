import React from 'react'
import './styles/Button.css'


function Button({ children, variant,disabledShadow }) {

    return (
        <button className={`button ${variant} ${disabledShadow}`}>
            { children }
        </button>
    )
}

export default Button
