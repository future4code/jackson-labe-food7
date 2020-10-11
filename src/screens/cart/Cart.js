import React, { useEffect, useState } from 'react';
import { HeaderTop } from '../../Components/HeaderTop/HeaderTop';
import { UserAddressBox, UserAddressLine, EmptyCartMsg, Freight, Main, PageBox, SubTotal, PaymentTitle, PaymentRadio, PaymentRadioLabel, ConfirmButton, PageBoxSon, CardBox, RestAddressBox, RestAddressLine } from './styled';
import axios from 'axios'
import { baseUrl } from '../../Constants/axiosConstants';
import ProductCard from '../../Components/ProductCard/ProductCard'
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../../Router/GoToPages';
import { useProtectPage } from '../../Hooks/useProtectPage';

import useForm from '../../Hooks/useForm'

function Cart(props) {
    useProtectPage()
    // console.log('Cart > props.orderData', props.orderData)
    const history = useHistory()

    // const {form, onChange} = useForm({inputTeste:''})
    // const handleInputChange = (event) =>{
    //   const { name, value } = event.target
    //   onChange(name, value)
    // } 

    const restId = props.orderData.restaurant.id || null
    const name =  props.orderData.restaurant.name || null
    const shipping =  props.orderData.restaurant.shipping || null
    const deliveryTime =  props.orderData.restaurant.deliveryTime || null
    const restAddress =  props.orderData.restaurant.address || null
    const freightPrice = shipping || 0

    const [userAddress, setUserAddress] = useState('')
    const [paymentMethod, setPaymentMethod] = useState(false)

    const calcTotalPrice = () => {
      let totalPrice = 0
      if (props.orderData) { 
        props.orderData.products.map(prod=>{
          totalPrice += (prod.price * prod.orderQtde)
        })
      }
        totalPrice += freightPrice
        // console.log('totalPrice', totalPrice)
        return totalPrice
    }


    const getFullAddress = () => {
      const token = localStorage.getItem('token')
      const baseHeader = {headers:{auth: token}}
      axios.get(`${baseUrl}/profile/address`, baseHeader)
        .then(response=>{
          // console.log('Cart > getFullAddress', response.data.address)
          setUserAddress(`${response.data.address.street}, ${response.data.address.number}`)
        })
        .catch(err=>{
          console.log('Cart > getActiveOrder', err)
        })
    }

    const placeOrder = () => {
      if (props.orderData.products.length > 0) {
        if (!paymentMethod) {
          window.alert('Escolha a forma de pagamento antes de Confirmar a compra')
        } else {
          const products = props.orderData.products.map(prod=>{
            return {id: prod.id, quantity: prod.orderQtde}
          })
          const body = {products: products, paymentMethod: paymentMethod}
          const token = localStorage.getItem('token')
          const baseHeader = {headers:{auth: token}}
          
          // console.log(`${baseUrl}/restaurants/${restId}/order`, body, baseHeader)

          axios.post(`${baseUrl}/restaurants/${restId}/order`, body, baseHeader)
            .then(response=>{
              // console.log('placeOrder: ', response)
              props.setOrderData({restaurant: {}, products:[]})
              goToHomePage(history)
            })
            .catch(err => {
              console.log('placeOrder: ', err)
            })
        }
      }
    }

    const onChangeRadioButton = (event) => {
      // console.log('onChangeRadioButton', event.target.value)
      setPaymentMethod(event.target.value)
    }

    useEffect(()=>{
      getFullAddress()
      // handleInputChange({target:{name: 'inputTeste', value: 'beija flor'}})
    },[])


    // let altProd = {
    //   category: "Salgado",
    //   description: "Esfiha deliciosa, receita secreta do Habibs.",
    //   id: "5omTFSOBYiTqeiDwhiBx",
    //   name: "Bibsfiha queijo",
    //   orderQtde: "3",
    //   photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_hig…c38aa8-b094-413d-9a80-ddc256bfcc78/201907031403_66194479.jpg",
    //   price: 1,
    // }

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
      return props.orderData.products.length > 0 && 
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
        })
        // <ProductCard 
        //   product={altProd}
        // />
    }

    return (
      <Main>
        <HeaderTop title={'Meu Carrinho'} backButton={false} />
        <PageBox>
          <PageBoxSon>
            <UserAddressBox>
              <UserAddressLine>Endereço de entrega</UserAddressLine>
              <UserAddressLine>{userAddress}</UserAddressLine>
            </UserAddressBox>
            
            {/* <input type="text" name='inputTeste' value={form.inputTeste} onChange={handleInputChange} /> */}

            {renderRestAddress()}

            <CardBox>
              {renderCards()}
            </CardBox>
            
            
            <Freight> <span> {`Frete R$${freightPrice.toFixed(2).replace('.', ',')}`} </span> </Freight>

            {/* <SubTotal> <span>SUBTOTAL</span> <span> {`R$${subTotalPrice.toFixed(2).replace('.', ',')}`} </span> </SubTotal> */}
            <SubTotal> <span>SUBTOTAL</span> <span> {`R$${calcTotalPrice().toFixed(2).replace('.', ',')}`} </span> </SubTotal>

            <PaymentTitle> Forma de pagamento </PaymentTitle>

            <PaymentRadioLabel for='money' >
              <PaymentRadio onChange={onChangeRadioButton} type='radio' id='money' name='paytype' value='money'/>
              Dinheiro
            </PaymentRadioLabel>

            <PaymentRadioLabel for='credcard' >
              <PaymentRadio onChange={onChangeRadioButton} type='radio' id='creditcard' name='paytype' value='creditcard'/>
              Cartão de crédito
            </PaymentRadioLabel>
          </PageBoxSon>

          <PageBoxSon>
            <ConfirmButton  onClick={placeOrder} > Confirmar </ConfirmButton>
          </PageBoxSon>
        </PageBox>
      </Main>
    )
  }
  
  export default Cart;
