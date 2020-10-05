import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from '../screens/home/Home'
import SignUp from "../screens/login/SignUp"
import Busca from "../screens/home/Busca"
import Address from "../screens/login/Address"
import Restaurant from "../screens/restaurant/restaurant"
import Cart from "../screens/cart/cart"
import Profile from "../screens/profile/profile"
import ProfileEdit from "../screens/profile/ProfileEdit"
import ProfileEditAddress from "../screens/profile/ProfileEditAddress"

function Router() {
    return (
      <BrowserRouter>
        <Switch>
          {/*páginas relacionadas a HOME*/} 
          <Route exact path={['/', '/home']}>
            <Home/>
          </Route>
          <Route exact path='/home/busca'>
            <Busca/>
          </Route>

          <Route exact path='/entrar'>
            <Login/>
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
          </Route>

          <Route exact path='/perfil'>
            <Profile/>
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