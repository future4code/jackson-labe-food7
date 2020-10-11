import React, { useState, useEffect } from 'react';
import {ContainerMain, MeuPerfil, Linha, AlinharEdit, Cadastro, Divisoria, ContainerHistorico, Main} from "./styled"
import editPng from "./img/edit.png"
import { goToProfileEdit, goToProfileEditAddress } from '../../Router/GoToPages';
import { useHistory } from 'react-router-dom';
import { HeaderTop } from '../../Components/HeaderTop/HeaderTop';
import axios from 'axios';
import { baseUrl } from '../../Constants/axiosConstants';


const Profile = () => {
  const history = useHistory()
  const token = localStorage.getItem("token")
  const headers = { headers: { auth: token } }
  const [ profileInfo, setProfileInfo ] = useState({})
  const [ orders, setOrders ] = useState([])

  const getProfile = () => {
    axios.get(`${baseUrl}/profile`, headers)
    .then((response) => {
      console.log(response)
      setProfileInfo(response.data.user)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const getOrders = () => {
    axios.get(`${baseUrl}/orders/history`, headers)
    .then((response) => {
      console.log(response)
      setOrders(response.data.orders)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getProfile()
    getOrders()
  }, [])

  const renderOrders = () => {
    if (orders.length > 0) {
      orders.map((order) => {
        return ( 
          <div key={order.createdAt} > {/* verificar se aparece pedido */}
            <Linha> {order.restaurantName} </Linha>
            <Linha> {order.createdAt} </Linha> 
            <Linha> SUBTOTAL R${order.totalPrice} </Linha>
          </div>
        )
      })
    } else {
      return (
        <div>Você não realizou nenhum pedido</div>
      )
    }
  }


  console.log(profileInfo)
  console.log(orders)

  return (
    <Main>
      <ContainerMain>
        <div>
          <HeaderTop backButton={false} title={"Meu Perfil"} />

          <MeuPerfil>

            <AlinharEdit>
              <Linha> {profileInfo.name} </Linha>
              <img src={editPng} onClick={() => goToProfileEdit(history)} />
            </AlinharEdit>

            <Linha> {profileInfo.email} </Linha>
            <Linha> {profileInfo.cpf} </Linha>
          </MeuPerfil>
        </div>

        <Cadastro>
          <div>
            <p>Endereço cadastrado </p>
            <p> {profileInfo.address} </p>
          </div>

          <img src={editPng} onClick={() => goToProfileEditAddress(history)} />
        </Cadastro>

        <ContainerHistorico>
          
          <Linha>Histórico de pedidos</Linha>

          <Divisoria>
          </Divisoria>

          {renderOrders()}

        </ContainerHistorico>
      </ContainerMain>
    </Main>
  );
}
  
export default Profile;
