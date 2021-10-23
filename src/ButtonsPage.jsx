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
                <ButtonShow 
                    label='<Button />'
                    button={
                        <Button >
                            Default
                        </Button>}
                />
                <ButtonShow 
                    label='<Button variant="outline" />'
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
                    <ButtonShow 
                        label='<Button disabled />'
                        button={
                            <Button disabled >
                                Disabled
                            </Button>}
                    />
                    <ButtonShow 
                        label='<Button variant="text" disabled />'
                        button={
                            <Button variant='text' disabled >
                                Disabled
                            </Button>}
                    />
                </div>
                <div className="col">
                    <ButtonShow 
                        label='<Button startIcon="local_grocery_store" />'
                        button={
                            <Button startIcon="local_grocery_store" >
                                Default    
                            </Button>}
                    />
                    <ButtonShow 
                        label='<Button endIcon="local_grocery_store" />'
                        button={
                            <Button endIcon="local_grocery_store" >
                                Default
                            </Button>}
                    />
                </div>
                <div className="col">
                    <ButtonShow 
                        label='<Button size="sm" />'
                        button={
                            <Button size="sm">
                                Default    
                            </Button>}
                    />
                    <ButtonShow 
                        label='<Button size="md" />'
                        button={
                            <Button size="md" >
                                Default
                            </Button>}
                    />
                    <ButtonShow 
                        label='<Button size="lg" />'
                        button={
                            <Button size="lg" >
                                Default
                            </Button>
                        }
                    />
                </div>
                <div className="col">
                    <ButtonShow 
                        label='<Button color="primary" />'
                        button={
                            <Button color="primary" >
                                Default    
                            </Button>}
                    />
                    <ButtonShow 
                        label='<Button color="secondary" />'
                        button={
                            <Button color="secondary" >
                                Default
                            </Button>}
                    />
                    <ButtonShow 
                        label='<Button color="danger" />'
                        button={
                            <Button color="danger" >
                                Default
                            </Button>
                        }
                    />
                </div>
                
                    
                <div className="col">
                <ButtonShow 
                        label='<Button color="primary" variant="outline" />'
                        button={
                            <Button color="primary" variant="outline">
                                Default
                            </Button>
                        }
                    />
                    <ButtonShow 
                        label='<Button color="secondary" variant="text" />'
                        button={
                            <Button color="secondary" variant="text">
                                Default
                            </Button>
                        }
                    />
                </div>
            </div>
        </main>
    )
}

export default ButtonsPage
