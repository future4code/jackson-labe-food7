import React from 'react'
import { Header, Title, TitleIn, SearchBox, SearchIcon, SearchInput } from 'styled-components'

function Busca() {
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