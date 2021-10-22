import React,{ useState, useEffect } from 'react'
import './styles/Button.css'


function Button({ children, 
    variant, 
    disabledShadow = false, 
    disabled,
    startIcon,
    endIcon ,
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

                            
            {startIcon ? 
                    <span class="material-icons">
                            { startIcon }
                    </span> : null
            }
            { children }
            {endIcon ? 
                <span class="material-icons">
                        { endIcon }
                </span> : null
            }
            
        </button>
        
    )
}

export default Button
