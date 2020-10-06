import React from 'react';
import {ContainerMain, MeuPerfil, Linha, AlinharEdit, Cadastro, Divisoria, ContainerHistorico, Main} from "./styled"
import editPng from "./img/edit.png"


function Profile() {
    return (
      <Main>
      <ContainerMain>
          <div>
             <p>Meu perfil </p>

             <MeuPerfil>

          <AlinharEdit>
           <Linha>Bruna </Linha>
           <img src={editPng} onClick=""></img>
           </AlinharEdit>

            <Linha>bruno@hotmail.com</Linha>
            <Linha>333.333.333-99</Linha>
        </MeuPerfil>
        </div>

      <Cadastro>
        <div>
          <p>Endereço cadastrado </p>
          <p>Rua Alessandro vieira, 111- Santana</p>
        </div>

        <img src={editPng} onClick=""></img>
      </Cadastro>

       <ContainerHistorico>
         
         <Linha>Historico de pedidos</Linha>

         <Divisoria>
         </Divisoria>

         {/* <div> */}
          <Linha>Bullguer Vila Malena</Linha>
          <Linha>23 Outubro 2020</Linha>
          <Linha>Subtotal R$67,00</Linha>
          {/* </div> */}

       </ContainerHistorico>
      </ContainerMain>
      </Main>
    );
  }
  
  export default Profile;
