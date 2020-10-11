import styled from "styled-components"

export const ContainerMain = styled.div`

  display:flex;
  flex-direction:column;
  width:360px;
     
`
export const MeuPerfil = styled.div`
     padding:8px 16px;
        text-align:left;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #000000;
`
export const Linha = styled.p`
      margin:8px 0;
`
export const AlinharEdit = styled.div`
     display:flex;
     align-items:center;
     height:18px;
     justify-content:space-between;

    >img{
     height:100%;
     cursor:pointer;
    }
`
export const Cadastro = styled.div`
        display:flex;
         background-color:#eeeeee;
        padding:8px 16px;
        text-align:left;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        justify-content:space-between;

        p{:first-child{color:#b8b8b8}; margin:8px 0;}

        >img{
            height:18px;
            cursor:pointer;
            align-self:center;
        }
        
`
export const Divisoria = styled.div`
        width: 328px;
        height: 1px;
         border: solid 1px #000000;
         align-self:center;
`

export const ContainerHistorico = styled.div`
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        padding:8px 16px;
`

export const Header = styled.div`
        height:45px;
        display:grid;
        place-items:center;

`
export const Main = styled.main`
  display:flex;
  justify-content:center;

  width: 100%;
`

// PROFILE EDIT
export const InputContainer = styled.div`
  width: 360px;
  height: 72px;
  margin-top:8px;
  margin-bottom:8px;
`
export const Input = styled.input`
  width: 328px;
  height: 50px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
`

export const ButtonContainer = styled.div`
  width: 360px;
  height: 42px;
  margin-bottom: 16px;
`

export const Button = styled.button`
  width: 328px;
  height: 42px;
  border-radius: 2px;
  background-color: #5cb646;
  border: none;
`

export const Text = styled.text`
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
export const Container = styled.div`
  width: 100vw;
  display:flex;
  flex-direction: column;
  align-items: center;
`