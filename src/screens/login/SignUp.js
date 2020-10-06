import React from 'react';
import logo1x from '../../img/imgLogin/logo1x.png'
import { useHistory } from 'react-router-dom';
import back from '../../img/imgSignup/back.png'
import {PageContainer,Logo, Header, BackButton, Title, Text, InputContainer, Input, ButtonContainer, Button} from './SignUpStyled'




const SignUp = () => {
  
  const history = useHistory()
  
  
  
  
  return (
      <PageContainer>
        <Header>
          <BackButton><img src={back}/></BackButton>
        </Header>
          <Logo src={logo1x} />
        <Title>
          <Text>Cadastrar</Text>
        </Title>
        <InputContainer>
          <Input placeholder=" Nome"/>
        </InputContainer>
        <InputContainer>
          <Input placeholder=" Email"/>
        </InputContainer>
        <InputContainer>
          <Input placeholder=" CPF" type="number"/>
        </InputContainer>
        <InputContainer>
          <Input placeholder=" Senha" type="password"/>
        </InputContainer>
        <InputContainer>
          <Input placeholder=" Confirmar senha" type="password"/>
        </InputContainer>
        <ButtonContainer>
          <Button>
            <Text>Criar</Text>
          </Button>
        </ButtonContainer>
      </PageContainer>
    );
  }
  
  export default SignUp;