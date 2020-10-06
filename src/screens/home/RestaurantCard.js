import React from 'react'
import styled from 'styled-components'
import { Line, RestRow, RestCard, RestCardImg, LineSpan, RestCardName, RestCardBottom, RestCardInfo } from './styled'

const RestaurantCard = (props) => {
    const {address, category, deliveryTime, description, id, logoUrl, name, shipping} = props.restaurant
    // console.log(props.restaurant)
    return (
        <RestRow>
            <RestCard>
                <RestCardImg src={`${logoUrl}`} ></RestCardImg>
                <RestCardBottom>
                    <RestCardName> {`${name} ${address.split(' - ')[1]}`} </RestCardName>
                    <RestCardInfo>
                        <LineSpan>{`${deliveryTime}min`}</LineSpan>
                        <LineSpan>{`Frete R$${shipping},00`}</LineSpan>
                    </RestCardInfo>
                </RestCardBottom>
            </RestCard>
        </RestRow>
    )
}

export default RestaurantCard
