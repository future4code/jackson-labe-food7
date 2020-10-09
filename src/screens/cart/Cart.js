import React, { useEffect, useState } from 'react';
import { HeaderTop } from '../../components/HeaderTop/HeaderTop';
import { AddressBox, AddressLine, EmptyCartMsg, Freight, Main, PageBox, SubTotal, PaymentTitle, PaymentRadio, PaymentRadioLabel, ConfirmButton, PageBoxSon } from './styled';
import axios from 'axios'
import { baseUrl } from '../../constants/axiosConstants';

function Cart(props) {
    console.log('Cart > props.cartProduct', props.cartProducts)
    const [subTotalPrice, setSubTotalPrice] = useState(0)

    const freightPrice = 10
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
        <HeaderTop title={'Meu Carrinho'} backButton={false} />
        <PageBox>
          <PageBoxSon>
            <AddressBox>
              <AddressLine>Endereço de entrega</AddressLine>
              <AddressLine>Rua Alessandra Vieira, 42</AddressLine>
            </AddressBox>

            <EmptyCartMsg> <span> Carrinho vazio </span> </EmptyCartMsg>

            <Freight> <span> {`Frete R$${freightPrice},00`} </span> </Freight>

            <SubTotal> <span>SUBTOTAL</span> <span> {`R$${subTotalPrice.toFixed(2).replace('.', ',')}`} </span> </SubTotal>

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
