import React, { useEffect, useState } from 'react'
import { SearchImg, FilterBar, FilterButton, Header, PageBox, SearchBox, SearchIcon, SearchInput, Title, TitleIn } from './styled'
import {searchSVG} from './img/search.svg'
import searchPNG from './img/search.png'
import RestaurantCard from './RestaurantCard'
import axios from 'axios'
import { useForm } from '../../hooks/useForm'


const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlVHSDRzV0g1U1Eza2pleFZDdzVEIiwibmFtZSI6IlJhcGhhZWwiLCJlbWFpbCI6InJhcGhhZWxAZW1haWwuY29tIiwiY3BmIjoiMTIzLjQ1Ni43ODktMDAiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUnVhIExhYmVuaWRhLCAyMDIwLCA4MyAtIExhcmdvIGRhIENhc2NhdGEiLCJpYXQiOjE2MDE5NTc2Nzl9.vvm1TIwY3S8Qij23ZrlFRtDXciep_jJgR7sKsTtTMpU'
const baseHeader = {headers:{auth: token}}

function Home() {
    const [form, handleInputChange] = useForm({search:''})
    const [restaurants, setRestaurants] = useState([])

    const getRestaurants = () => {
      axios.get(`${baseUrl}/restaurants`, baseHeader)
        .then(response=>{
          console.log(response.data.restaurants)
          setRestaurants(response.data.restaurants)
        })
        .catch(err=>{
          console.log(err)
        })
    }


    useEffect(()=>{
      storageToken()
      getRestaurants()
    },[])


    const renderCards = () => {
      if (restaurants.length > 0) {
        return restaurants.map(rest=>{
          return <RestaurantCard key={rest.id} restaurant={rest}></RestaurantCard>
        })
      }
    }


    const renderCategories = () => {
      let newCats = []
      
      let categories = 
        restaurants
          .map(restaurant => {
            // console.log(restaurant.address/*.split(' - ')[1]*/)
            if (!newCats.includes(restaurant.category)) {
              newCats.push(restaurant.category)
              return restaurant.category
            }
          })
          .sort()
          .map((cat, index) => {
            // console.log(index)
            if (index === 0) {
              return <FilterButton key={index} active={true}> {cat} </FilterButton>
            } else {
              return <FilterButton key={index} > {cat} </FilterButton>
            }
            
          })
  
        return categories
      }

    const storageToken = () => {
      localStorage.setItem('token', token)
    }

    const retauranteTeste = {
      id: "6",
      description: "Culinária baiana, como caldinho de sururu e acarajé, empório nordestino e bar com 400 rótulos de cachaça.",
      category: "Baiana",
      address: "Rua Dorival Caymmi, 149 - Alto dos Ibirás",
      deliveryTime: 40,
      name: "Sotero Cozinha Original",
      logoUrl: "http://soter.ninja/futureFoods/logos/sotero.jpg",
      shipping: 4
    }

    return (
      <PageBox>

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

        <FilterBar> {renderCategories()} </FilterBar>
        {renderCards()}
      </PageBox>
    )
  }
  
  export default Home;