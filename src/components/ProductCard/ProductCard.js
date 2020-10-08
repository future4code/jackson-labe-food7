import React, { useState } from 'react'
import { Container, CardContainer, ImageContainer, ContantContainer, ProductDescription, ProductTitle, ProductValue, QuantityButton, AddButton } from './styled'


const ProductCard = (props) => {
    const { photoUrl, name, description, price  } = props.restaurant

    const [ buttonName, setButtonName ] = useState(true)
    const [ visibility, setVisibility ] = useState(false)

    const handleNameButton = buttonName ? "Adicionar" : "Remover"
    const handleColorButton = buttonName ? "#5cb646" : "#e02020";
    const handleVisibility = visibility ? "visible" : "hidden";


    const handlePrice = () => {
        if(price % 1 === 0) {
            return (
                <ProductValue>
                    R${price}.00
                </ProductValue>
            )
        } else {
            return (
                <ProductValue>
                    R${price}0
                </ProductValue>
            )
        }
    }

    const onClickAdd = () => {
        
        if (buttonName) {
            setButtonName(false)
            setVisibility(true)
            props.setQuantity()
        } else {
            setButtonName(true)
            setVisibility(false)
        }
    }


    return (
        <Container>
            <CardContainer>
                <ImageContainer src={photoUrl} />
                <ContantContainer>
                    <ProductTitle>
                        {name}
                    </ProductTitle>
                    <ProductDescription>
                        {description}
                    </ProductDescription>
                    
                    {/* PRICE */}
                    {handlePrice()}

                    <QuantityButton
                        visibility={handleVisibility}                    
                    >
                        2
                    </QuantityButton>
                    <AddButton 
                        onClick={onClickAdd}
                        borderColor={handleColorButton}
                        color={handleColorButton}
                    >
                        {handleNameButton}
                    </AddButton>
                  
                </ContantContainer>
            </CardContainer>
        </Container>
    )
}

export default ProductCard;