import React from 'react';
import { HeaderTop } from '../../components/HeaderTop/HeaderTop';
import { AddressBox, AddressLine, EmptyCartMsg, Freight, Main, PageBox, SubTotal, PaymentTitle, PaymentRadio, PaymentRadioLabel, ConfirmButton, PageBoxSon } from './styled';


function Cart() {

    const freightPrice = 10
    const subTotalPrice = 65

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

            <Freight> <span> {`Frete R$${freightPrice}`} </span> </Freight>

            <SubTotal> <span>SUBTOTAL</span> <span> {`R$${subTotalPrice},00`} </span> </SubTotal>

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
            <ConfirmButton> Confirmar </ConfirmButton>
          </PageBoxSon>
        </PageBox>
      </Main>
    )
  }
  
  export default Cart;
