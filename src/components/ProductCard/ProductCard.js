import React, { useState } from 'react'
import { Container, CardContainer, ImageContainer, ContantContainer, ProductDescription, ProductTitle, ProductValue, QuantityButton, AddButton } from './styled'
import ConfirmQuantity from '../ConfirmQuantity/ConfirmQuantity'


const ProductCard = (props) => {
    const { photoUrl, name, description, price  } = props.restaurant

    const [ selectedQuantity, setSelectedQuantity ] = useState("")
    const [ quantityPage, setQuantityPage ] = useState(false)

    const handleOpenPage = () => {
        setQuantityPage(true)
    }

    const handleClosePage = () => {
        setQuantityPage(false)
    }

    const onChangeSelect = (event) => {
        setSelectedQuantity(event.target.value)
    }
    
    const onClickCartAdd = (event) => { 
        event.preventDefault()
        handleClosePage()
    }

    const removeValue = () => {
        setSelectedQuantity("")
    }

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

    const renderConfirmQuantity = () => {
        if (quantityPage) {
            return (
                <ConfirmQuantity
                    selectQuantity={selectedQuantity}
                    onChangeSelect={onChangeSelect}
                    onClickCartAdd={onClickCartAdd}
                />
            )
        }
    }

    console.log()

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

                    {handlePrice()}
            
                    {selectedQuantity ?  <QuantityButton>{selectedQuantity}</QuantityButton> : <></>}

                    {selectedQuantity ? 
                    <AddButton 
                        onClick={removeValue}
                        borderColor={"#e02020"}
                        color={"#e02020"}
                    >
                        Remover
                    </AddButton>
                    : 
                    <AddButton 
                        onClick={handleOpenPage}
                        borderColor={"#5cb646"}
                        color={"#5cb646"}
                    >
                        Adicionar
                    </AddButton>
                    }                  
                </ContantContainer>
            </CardContainer>
            {renderConfirmQuantity()}
        </Container>

    )
}

export default ProductCard;