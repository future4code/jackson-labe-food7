import React from 'react';
import {PageContainer, Header, BackButton, Title, Text, InputContainer, Input, ButtonContainer, Button} from './AddressStyled'
import back from '../../img/imgSignup/back.png'



const Address = () => {
    return (
      <PageContainer>
          <Header>
          <BackButton><img src={back}/></BackButton>
        </Header>
        <Title>
          <Text>Meu endereço</Text>
        </Title>
        <InputContainer>
          <Input placeholder="Logradouro"/>
        </InputContainer>
        <InputContainer>
          <Input placeholder="Número" type="number"/>
        </InputContainer>
        <InputContainer>
          <Input placeholder="Complemento"/>
        </InputContainer>
        <InputContainer>
          <Input placeholder="Bairro"/>
        </InputContainer>
        <InputContainer>
          <Input placeholder="Cidade"/>
        </InputContainer>
        <InputContainer>
          <Input placeholder="Estado"/>
        </InputContainer>
        <ButtonContainer>
          <Button>
            <Text>Salvar</Text>
          </Button>
        </ButtonContainer>
      </PageContainer>
    );
  }
  
  export default Address;