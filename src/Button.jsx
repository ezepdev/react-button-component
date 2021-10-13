import React,{ useState, useEffect } from 'react'
import './styles/Button.css'


function Button({ children, variant = "default", disabledShadow = false, color = 'color_default' }) {

    
    const [styles,setStyles] = useState(
        [
            variant, color
        ]
        )
        
    useEffect(() => {
        if (disabledShadow) {
            setStyles( styles => styles.concat('disabledShadow') )
        }
        else {
            setStyles(styles => styles.filter(e => e !== 'disabledShadow'))
        }
    },[disabledShadow])

    return (
        <button className={`button ${styles.join(' ')}`}>
            { children }    
        </button>
    )
}

export default Button
