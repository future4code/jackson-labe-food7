import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from '../screens/Home/Home'
import SignUp from "../screens/Login/SignUp"
import Busca from "../screens/Home/Busca"
import Address from "../screens/Login/Address"
import Restaurant from "../screens/Restaurant/RestaurantPage"
import Cart from "../screens/Cart/Cart"
import Profile from "../screens/Profile/Profile"
import ProfileEdit from "../screens/Profile/ProfileEdit"
import ProfileEditAddress from "../screens/Profile/ProfileEditAddress"
import Login from "../screens/Login/Login"
import React from 'react';
import HomeScreen from "../screens/HomeScreen/HomeScreen"
import Footer from "../components/Footer/Footer"

function Router() {
    return (
      <BrowserRouter>
        <Switch>
          {/*páginas relacionadas a HOME*/} 
          <Route exact path='/home'>
            <Home/>
            <Footer/>
          </Route>
          
          <Route exact path='/home/busca'>
            <Busca/>
          </Route>

          <Route exact path='/login'>
            <Login/>
          </Route>

          <Route exact path='/'>
            <HomeScreen/>
          </Route>

          <Route exact path='/cadastrar'>
            <SignUp/>
          </Route>

          <Route exact path='/cadastrar/endereco'>
            <Address/>
          </Route>

          <Route exact path='/restaurante/:id'>
            <Restaurant/>
          </Route>

          <Route exact path='/carrinho'>
            <Cart/>
            <Footer/>
          </Route>

          <Route exact path='/perfil'>
            <Profile/>            
            <Footer/>
          </Route>

          <Route exact path='/perfil/editar'>
            <ProfileEdit/>
          </Route>

          <Route exact path='/perfil/editar/endereco'>
            <ProfileEditAddress/>
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
  
  export default Router;














  

// import { BrowserRouter, Switch, Route } from "react-router-dom"
// import Home from '../screens/home/Home'
// import SignUp from "../screens/login/SignUp"
// import Busca from "../screens/home/Busca"
// import Address from "../screens/login/Address"
// import Restaurant from "../screens/restaurant/RestaurantPage"
// import Cart from "../screens/cart/Cart"
// import Profile from "../screens/profile/Profile"
// import ProfileEdit from "../screens/profile/ProfileEdit"
// import ProfileEditAddress from "../screens/profile/ProfileEditAddress"
// import Login from "../screens/login/Login"
// import React from 'react';
// import HomeScreen from "../screens/homeScreen/HomeScreen"
// import Footer from "../components/Footer/Footer"
// import { PaginaTeste } from "../screens/cart/PaginaTeste"

// function Router(props) {
//     return (
//       <BrowserRouter>
//         <Switch>
//           {/*páginas relacionadas a HOME*/} 
//           <Route exact path='/home'>
//             <Home/>
//             <Footer/>
//           </Route>
          
//           <Route exact path='/home/busca'>
//             <Busca/>
//           </Route>

//           <Route exact path='/login'>
//             <Login/>
//           </Route>

//           <Route exact path='/'>
//             <HomeScreen/>
//           </Route>

//           <Route exact path='/cadastrar'>
//             <SignUp/>
//           </Route>

//           <Route exact path='/cadastrar/endereco'>
//             <Address/>
//           </Route>

//           <Route exact path='/restaurante/:id'>
//             <Restaurant/>
//           </Route>

//           <Route exact path='/carrinho'>
//             <Cart cartProducts={props.cartProducts} />
//             <Footer/>
//           </Route>

//           <Route exact path='/perfil'>
//             <Profile/>            
//             <Footer/>
//           </Route>

//           <Route exact path='/perfil/editar'>
//             <ProfileEdit/>
//           </Route>

//           <Route exact path='/perfil/editar/endereco'>
//             <ProfileEditAddress/>
//           </Route>
//           <Route exact path='/paginateste'>
//             <PaginaTeste onClickCart={props.onClickCart} />
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     )
//   }
  
//   export default Router;
