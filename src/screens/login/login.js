import React from 'react';
import styled from 'styled-components';
import logo1x from '../../img/imgLogin/logo1x.png'



const PageContainer = styled.div`
  display:flex;
  flex-direction:column;
  width: 360px;
  height: 640px;
  background-color:lightsteelblue; 
  align-items: center;
`

const Logo = styled.img`
  width: 104px;
  height: 58px;
  margin-top:88px;
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
  margin-top:8px;
  margin-bottom:8px;
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
  margin-bottom: 16px;
`

const Button = styled.button`
  width: 328px;
  height: 42px;
  border-radius: 2px;
  background-color: #5cb646;
  border: none;
`

const Login = () => {
    return (
      <PageContainer>
        <Logo src={logo1x} />
        <Title>
          <Text>Entrar</Text>
        </Title>
        <InputContainer>
          <Input/>
        </InputContainer>
        <InputContainer>
          <Input/>
        </InputContainer>
        <ButtonContainer>
          <Button>
            <Text>Entrar</Text>
          </Button>
        </ButtonContainer>
        <Title>
          <Text>Não possui cadastro? Clique aqui.</Text>
        </Title>
      </PageContainer>
    );
  }
  
  export default Login;