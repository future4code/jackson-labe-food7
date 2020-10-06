import React from 'react'
import styled from 'styled-components'
import logo1x from '../../img/logo1x.png'

const ScreenPage = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width: 360px;
  height: 640px;
  background-color:#000000;
  
`
const Logo = styled.img`
  width: 126px;
  height: 65px;

`

const  HomeScreen = () => {
    return (
      <ScreenPage>
        <Logo src={logo1x} />
      </ScreenPage>
    );
  }
  
  export default HomeScreen;
