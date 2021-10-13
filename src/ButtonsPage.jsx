import React from 'react'
import Button from './Button'
import './styles/ButtonsPage.css'

function ButtonsPage() {
    return (
        <main className='buttons_container'>
            <h1 className='buttons_container__title'>
                Buttons
            </h1>
            <div>
                <p>{`<Button />`}</p>
                <Button>
                    Default
                </Button>
                {/* ------------------------------------------ */}
                <p>{`<Button variant="outline" />`}</p>
                <Button variant="outline" >
                    Default
                </Button>
                {/* ------------------------------------------ */}
                <p>{`<Button variant="text" />`}</p>
                <Button variant="text" >
                    Default
                </Button>
                {/* ------------------------------------------ */}
                <p>{`<Button disabledShadow />`}</p>
                <Button disabledShadow >
                    Default
                </Button>

            </div>
            {/* <Button variant="text" /> */}
        </main>
    )
}

export default ButtonsPage
