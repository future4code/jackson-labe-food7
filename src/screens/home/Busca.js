
import React, { useState, useEffect } from 'react'
import { Header, Title, TitleIn, SearchBox, SearchIcon, SearchInput } from './styled'
import searchPNG from './img/search.png'
import useForm from '../../hooks/useForm'

function Busca() {
  const {form, handleInputChange} = useForm({search:''})

  return (
    <div>
      <Header>
        <Title>
          <TitleIn> FutureEats </TitleIn>
        </Title>
      </Header>
      <SearchBox>
        <SearchIcon>
          {/*<SearchImg src={searchPNG} />*/}
          <img  src={searchPNG}/>
        </SearchIcon>
        <SearchInput
          placeholder='Restaurante'
          name={'search'}
          onChange={handleInputChange}
          value={form.search}
          type='text'
        />
      </SearchBox>
    </div>
  )
}
  
  export default Busca;