import React from 'react';
import styled from 'styled-components';
import back from '../../img/imgSignup/back.png'

const PageContainer = styled.div`
  display:flex;
  flex-direction:column;
  width: 360px;
  height: 640px;
  background-color:lightsteelblue; 
  align-items: center;
`

const Text = styled.text`
  width: 296px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
`
const Title = styled.div`
  width: 360px;
  height: 42px;
  margin-top:16px;
`

const InputContainer = styled.div`
  width: 360px;
  height: 72px;
`
const Input = styled.input`
  width: 328px;
  height: 50px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
`
const ButtonContainer = styled.div`
  width: 360px;
  height: 42px;
`

const Button = styled.button`
  width: 328px;
  height: 42px;
  border-radius: 2px;
  background-color: #5cb646;
  border: none;
`
const Header = styled.header`
  width: 360px;
  height: 64px;
  border-bottom:1px solid grey;
`
const BackButton = styled.button`
  display:flex;
  width: 23px;
  height: 24px;
  background:none;
  border:none;
  margin-top:20px;
`

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