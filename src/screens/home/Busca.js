
import React, { useState, useEffect } from 'react'
import { PageBox, MsgBar, Main } from './styled'
import axios from 'axios'
import RestaurantCard from './RestaurantCard'
import { SearchField } from './SearchField'
import { useHistory } from 'react-router-dom'
import { HeaderTop } from '../../Components/HeaderTop/HeaderTop'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA'

function Busca() {
  const [restaurants, setRestaurants] = useState([])
  const [searchString, setSearchString] = useState('')

  const getRestaurants = () => {
    const token = localStorage.getItem('token')
    const baseHeader = {headers:{auth: token}}
    axios.get(`${baseUrl}/restaurants`, baseHeader)
      .then(response=>{
        // console.log(response.data.restaurants)
        setRestaurants(response.data.restaurants)
      })
      .catch(err=>{
        console.log(err)
      })
  }

  const renderCards = () => {
    let renderRestaurants = []
    if (searchString === '') {
      return  <MsgBar> Busque por nome de restaurante </MsgBar>
    } else if (restaurants.length > 0 && searchString !== '') {
      renderRestaurants = restaurants
        .filter(rest=>{
          return rest.name.toLowerCase().includes(searchString.toLowerCase())
        })
        .map(rest=>{
            return <RestaurantCard key={rest.id} restaurant={rest}></RestaurantCard>
        })
    }

    if (searchString !== '' && renderRestaurants.length <= 0) {
      return <MsgBar> Não encontamos :( </MsgBar>
    } else if (searchString !== '' && renderRestaurants.length > 0) {
      return renderRestaurants
    }
  }


  useEffect(()=>{
    getRestaurants()
  },[])

  return (
    <Main>     
      <HeaderTop backButton={true} title={'Busca'}/>

      <PageBox>
        {/* input para busca */}
          <SearchField history={null} setSearchString={setSearchString} />

        {/* função para renderizar os cards ou mensagens conforme a situação */}
          {renderCards()}

      </PageBox>
    </Main>
  )
}
  
  export default Busca;