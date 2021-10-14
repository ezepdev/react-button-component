import React,{ useState, useEffect } from 'react'
import './styles/Button.css'


function Button({ children, 
    variant = "default", 
    disabledShadow = false, 
    disabled, 
    color }
    ) {
    
    const [styles,setStyles] = useState(
        [
            variant, color
        ]
    )
        
    useEffect(() => {
        if (disabledShadow) {
            setStyles( styles => styles.concat('disabledShadow') )
        }
    },[disabledShadow])

    return (
        <button disabled={disabled} className={`button ${styles.join(' ')}`} >
            { children }    
        </button>
    )
}

export default Button
