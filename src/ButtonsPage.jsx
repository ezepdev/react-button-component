import React from 'react'
import Button from './Button'
import ButtonShow from './ButtonShow'
import './styles/ButtonsPage.css'

function ButtonsPage() {
    return (
        <main className='buttons_container'>
            <h1 className='buttons_container__title'>
                Buttons
            </h1>
            <div>
                <ButtonShow label='<Button />'
                            button={
                                <Button >
                                    Default
                                </Button>}
                />
                <ButtonShow label='<Button variant="outline" />'
                            button={
                                <Button variant='outline' >
                                    Default
                                </Button>}
                />

                    <ButtonShow 
                        label='<Button variant="text" />' 
                        button={
                            <Button variant='text' >
                                Default
                            </Button>
                        }
                    />
                    <ButtonShow 
                        label='<Button disabledShadow />' 
                        button={
                            <Button disabledShadow >
                                Default
                            </Button>
                        }
                    />
                <div className="col">
                    <ButtonShow label='<Button disabledShadow />'
                                button={
                                    <Button disabled >
                                        Disabled
                                    </Button>}
                    />
                    <ButtonShow label='<Button variant="outline" disabled />'
                                button={
                                    <Button variant='outline' disabled >
                                        Disabled
                                    </Button>}
                    />
                </div>
            </div>
            {/* <Button variant="text" /> */}
        </main>
    )
}

export default ButtonsPage
