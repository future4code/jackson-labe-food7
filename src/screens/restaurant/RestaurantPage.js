import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard'
import { Container, RestaurantContainer, ImageContainer, Image, Name, Text, Info, ProductContainer, SectionTitle, QuantityPage, QuantityContainer, QuantityText, QuantitySelect, QuantityButton } from './styled';
import axios from 'axios';
import { baseUrl } from '../../constants/axiosConstants'
import { useParams } from 'react-router-dom';


const RestaurantPage = () => {
  const pathParams = useParams();
  // const token = localStorage.getItem("token")
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlR4UEJFM1Bhem13bGFqOTNyNFZvIiwibmFtZSI6Ik1hZyIsImVtYWlsIjoibWFnYWxpLXRlc3RlQGdtYWlsLmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTkxIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIGRhIENhc2EsIDAwNyAtIEJhaXJybyBDZW50cm8iLCJpYXQiOjE2MDIwODM3MDl9.ZAuoJ4j90uFc8hPbLsl344hdSiIqkxqHnhH44QMcgKQ"
  const headers = { headers: { auth: token } }

  const [ restaurant, setRestaurant ] = useState({})
  const [ menuProducts, setMenuProducts ] = useState([])
  
  const [categories, setCategories] = useState([]);  
  const [ quantity, setQuantity ] = useState(false)

  const getDetails = () => {       
    axios.get(`${baseUrl}/restaurants/${pathParams.id}`, headers)
    .then((response) => {
      console.log(response)
      setRestaurant(response.data.restaurant)
      setMenuProducts(response.data.restaurant.products)
      getCategorys()
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const onlyUnique = (value, index, self) =>{
    return self.indexOf(value) === index;
  };

  const getCategorys = () => {
    let nameCategory =
      menuProducts
        .map((name) => {   
        return name.category
        })
        .filter(onlyUnique)
        .sort().reverse()
    ;   
    setCategories([...nameCategory]);
  }

  useEffect(() =>{
    getDetails();
    
  }, [pathParams]);

  useEffect(() =>{
    getCategorys();
    
  }, [menuProducts]);

  const renderQuantityPage = () => {
    if (quantity) {
      return (
        <QuantityPage>
          <QuantityContainer>
            <QuantityText> Selecione a quantidade desejada </QuantityText>
            <QuantitySelect>
              <option value={1} > 1 </option>
              <option value={2} > 2 </option>
              <option value={3} > 3 </option>
              <option value={4} > 4 </option>
              <option value={5} > 5 </option>
              <option value={6} > 6 </option>
              <option value={7} > 7 </option>
              <option value={8} > 8 </option>
              <option value={9} > 9 </option>
              <option value={10} > 10 </option>
            </QuantitySelect>
            <QuantityButton>
              ADICIONAR AO CARRINHO
            </QuantityButton>
          </QuantityContainer>
      </QuantityPage>
      )
      
    }
  }

  const handleQuantity = () => {
    setQuantity(true)
  }

  console.log(restaurant)
  console.log(menuProducts)
  console.log(categories)

  return (
    <Container>
      <h1>HEADER</h1>

      <RestaurantContainer>
        <ImageContainer>
          <Image src={restaurant.logoUrl} />
        </ImageContainer>
        <Name> {restaurant.name} </Name>
        <Text> {restaurant.category} </Text>
        <Info>
          <Text> {restaurant.deliveryTime} min </Text>
          <Text> Frete R${restaurant.shipping},00 </Text>
        </Info>
        <Text> {restaurant.address} </Text>
      </RestaurantContainer>

      
      {categories.map((nameCategory) => {
        return (
          <ProductContainer>
            <SectionTitle> {nameCategory} </SectionTitle>
            {menuProducts.map((product) => {
              if (product.category === nameCategory) {
                return (
                  <ProductCard 
                    key={product.id}
                    restaurant={product}
                    setQuantity={handleQuantity}
                  />
                )
              }

            })}

      

          </ProductContainer>
        )
      })}

      {renderQuantityPage()}


    </Container>

  );
}
  
export default RestaurantPage;
