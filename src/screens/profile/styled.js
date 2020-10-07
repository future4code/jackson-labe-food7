import styled from"styled-components"

export const ContainerMain = styled.div`
       border: 1px solid black;
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
`
