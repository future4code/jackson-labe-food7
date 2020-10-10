import React, { useEffect, useState } from 'react';
import { HeaderTop } from '../../Components/HeaderTop/HeaderTop';
import { UserAddressBox, UserAddressLine, EmptyCartMsg, Freight, Main, PageBox, SubTotal, PaymentTitle, PaymentRadio, PaymentRadioLabel, ConfirmButton, PageBoxSon, CardBox, RestAddressBox, RestAddressLine } from './styled';
import axios from 'axios'
import { baseUrl } from '../../Constants/axiosConstants';
import ProductCard from '../../Components/ProductCard/ProductCard'

function Cart(props) {
    console.log('Cart > props.orderData', props.orderData)
    const [subTotalPrice, setSubTotalPrice] = useState(0)
    // const {name, shipping, deliveryTime} = props.orderData ? props.orderData.restaurant : '' 
    const name =  props.orderData.restaurant.name || null
    const shipping =  props.orderData.restaurant.shipping || null
    const deliveryTime =  props.orderData.restaurant.deliveryTime || null
    const restAddress =  props.orderData.restaurant.address || null

    const calcTotalPrice = () => {
      let totalPrice = 0
      if (props.orderData) { 
        props.orderData.products.map(prod=>{
          totalPrice += (prod.price * prod.orderQtde)
        })
      }
        console.log('totalPrice', totalPrice)
        return totalPrice
    }

    let altProd = {
      category: "Salgado",
      description: "Esfiha deliciosa, receita secreta do Habibs.",
      id: "5omTFSOBYiTqeiDwhiBx",
      name: "Bibsfiha queijo",
      orderQtde: "3",
      photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_hig…c38aa8-b094-413d-9a80-ddc256bfcc78/201907031403_66194479.jpg",
      price: 1,
    }

    const renderRestAddress = () => {
      return (props.orderData.restaurant.name && props.orderData.products.length > 0) ?
        <RestAddressBox>
          <RestAddressLine> {`${name} ${restAddress.split(' - ')[1]}`} </RestAddressLine>
          <RestAddressLine> {restAddress} </RestAddressLine>
          <RestAddressLine> { `${deliveryTime} min`} </RestAddressLine>
        </RestAddressBox>
      :
      <EmptyCartMsg> <span> Carrinho vazio </span> </EmptyCartMsg>
    }

    const renderCards = () => {
      return props.orderData ? 
        props.orderData.products.map(prod=>{
          return (
            <ProductCard 
              key={prod.id}
              product={prod}
              orderQtde={prod.orderQtde}
              restaurant={props.orderData.restaurant}
              formatOrders={props.formatOrders}
            />
          )
        }) :
        <ProductCard 
          restaurant={altProd}
        />
        // <EmptyCartMsg> <span> Carrinho vazio </span> </EmptyCartMsg>
    }
    
    const freightPrice = props.orderData.restaurant.shipping || 0

    
    // const freightPrice = 10
    // const altPrice = 65

    const getActiveOrder = () => {
      const token = localStorage.getItem('token')
      const baseHeader = {headers:{auth: token}}
      axios.get(`${baseUrl}/active-order`, baseHeader)
        .then(response=>{
          console.log('Cart > getActiveOrder', response.data.order)
          setSubTotalPrice(response.data.order.totalPrice)
        })
        .catch(err=>{
          console.log('Cart > getActiveOrder', err)
        })
    }

    useEffect(()=>{
      getActiveOrder()
    },[])

    return (
      <Main>
        {console.log('calcTotalPrice', calcTotalPrice)}
        {console.log('renderCards: ', renderCards) }
        <HeaderTop title={'Meu Carrinho'} backButton={false} />
        <PageBox>
          <PageBoxSon>
            <UserAddressBox>
              <UserAddressLine>Endereço de entrega</UserAddressLine>
              <UserAddressLine>Rua Alessandra Vieira, 42</UserAddressLine>
            </UserAddressBox>
            
            {renderRestAddress()}

            <CardBox>
              {renderCards()}
            </CardBox>
            
            
            <Freight> <span> {`Frete R$${freightPrice.toFixed(2).replace('.', ',')}`} </span> </Freight>

            {/* <SubTotal> <span>SUBTOTAL</span> <span> {`R$${subTotalPrice.toFixed(2).replace('.', ',')}`} </span> </SubTotal> */}
            <SubTotal> <span>SUBTOTAL</span> <span> {`R$${calcTotalPrice().toFixed(2).replace('.', ',')}`} </span> </SubTotal>

            <PaymentTitle> Forma de pagamento </PaymentTitle>

            <PaymentRadioLabel for='money' >
              <PaymentRadio type='radio' id='money' name='paytype' value='money'/>
              Dinheiro
            </PaymentRadioLabel>

            <PaymentRadioLabel for='credcard' >
              <PaymentRadio type='radio' id='credcard' name='paytype' value='credcard'/>
              Cartão de crédito
            </PaymentRadioLabel>
          </PageBoxSon>

          <PageBoxSon>
            <ConfirmButton onClick={()=>window.alert('clicou confirmar')} > Confirmar </ConfirmButton>
          </PageBoxSon>
        </PageBox>
      </Main>
    )
  }
  
  export default Cart;
