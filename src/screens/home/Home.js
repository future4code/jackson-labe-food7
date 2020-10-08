import React, { useEffect, useState } from 'react'
import { FilterBar, FilterButton, Header, PageBox, Title, TitleIn, BackButton, Main, CardPopup } from './styled'
import RestaurantCard from './RestaurantCard'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { SearchField } from './SearchField'
import { HeaderTop } from '../../components/HeaderTop/HeaderTop'


const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA'
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlVHSDRzV0g1U1Eza2pleFZDdzVEIiwibmFtZSI6IlJhcGhhZWwiLCJlbWFpbCI6InJhcGhhZWxAZW1haWwuY29tIiwiY3BmIjoiMTIzLjQ1Ni43ODktMDAiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUnVhIExhYmVuaWRhLCAyMDIwLCA4MyAtIExhcmdvIGRhIENhc2NhdGEiLCJpYXQiOjE2MDE5NTc2Nzl9.vvm1TIwY3S8Qij23ZrlFRtDXciep_jJgR7sKsTtTMpU'
// const baseHeader = {headers:{auth: token}}


function Home() {
    const [restaurants, setRestaurants] = useState([])
    const [category, setCategory] = useState('')
    const history = useHistory()
    
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


    useEffect(()=>{
      // storageToken()
      getRestaurants()
    },[])


    const renderCards = () => {
      if (restaurants.length > 0) {
        return restaurants.map(rest=>{
          if (rest.category === category || category === '') {
            return (<RestaurantCard key={rest.id} restaurant={rest}></RestaurantCard>)
          }
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
            if (cat === category) {
              return <FilterButton key={index} active={true} onClick={()=>onClickCategory(cat)} > {cat} </FilterButton>
            } else {
              return <FilterButton key={index} onClick={()=>onClickCategory(cat)}> {cat} </FilterButton>
            }
            
          })
        
        // categories.unshift(<FilterButton active={true} onClick={()=>onClickCategory('')} > Todas </FilterButton>)
        return categories
      }


      const onClickCategory = (category) => {
        // alert(category)
        setCategory(category)
      }

    // const storageToken = () => {
    //   localStorage.setItem('token', token)
    // }

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
      <Main>
        <HeaderTop backButton={false} title={'FutureEats'} />
        <PageBox>
          <SearchField history={history} />
          <FilterBar> {renderCategories()} </FilterBar>
          {renderCards()}
          {/* <RestaurantCard restaurant={retauranteTeste}></RestaurantCard> */}
        </PageBox>
        {/* <CardPopup/> */}
      </Main>
    )
  }
  
  export default Home;
