// import React from 'react';
// import './App.css';
// import Router from './Router/Router';
// import Alert from './Components/Alert/Alert'

// function App() {
//   return (
//     <div className="App">
//     <Router/>
//     </div>
//   );
// }

// export default App;





import React, {useState } from 'react';
import './App.css';
import Router from './Router/Router';


function App() {
  const[cartData, setCartData] = useState()

  //função passada via props para o ProductCard.js e estado controlado por ela
  const [orderData, setOrderData] = useState({restaurant: {}, products:[]})
  console.log('App: ', orderData)

  const formatOrders = (restaurant, product, qtde) => {
    console.log('App > formatOrders')
    const restaurantData = {
      name: restaurant.name,
      address: restaurant.address,
      shipping: restaurant.shipping,
      deliveryTime: restaurant.deliveryTime,
    }
    let productOrder = {...product, orderQtde: qtde}

    if (qtde > 0) {
      let newProducts = orderData.products.map(prod=>{
          return prod.id === productOrder.id ? prod = {...prod, orderQtde: qtde} : prod
      })
      // console.log('newProducts', newProducts)

      const filterProducts = newProducts.filter(prod=>{
          return prod.id === productOrder.id
      })
      // console.log('filterProducts', filterProducts)

      if (filterProducts.length <= 0) {
          // newProducts = [...newProducts, {id: id, qtde: qtde}]
          newProducts = [...newProducts, productOrder]
      }
      // console.log('newProducts2', newProducts)

      setOrderData({restaurant: restaurantData, products: newProducts})
    //  props.setCartData({restaurant: restaurantData, products: newProducts})

    } else if (qtde <= 0) {
      const newProducts = orderData.products.filter(prod=>{
        return prod.id !== productOrder.id
      })
      // console.log('else if (qtde <= 0) > newProducts', newProducts)
      setOrderData({restaurant: restaurantData, products: newProducts})
    //  props.setCartData({restaurant: restaurantData, products: newProducts})
    }
  }
  //-------------------------


  return (
    <div className="App">
      <Router formatOrders={formatOrders} orderData={orderData} />
    </div>
  );
}

export default App;
