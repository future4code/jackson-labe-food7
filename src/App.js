import React from 'react';
import './App.css';
import Router from './Router/Router';
import Alert from './components/Alert/Alert'

function App() {
  return (
    <div className="App">
    <Router/>
    </div>
  );
}

export default App;





// import React, {useState } from 'react';
// import './App.css';
// import Router from './router/Router';


// function App() {
//   const[cartProducts, setCartProducts] = useState()
//   const onClickCart = (products) => {
//         console.log(products)
//         setCartProducts(products)
//   }

//   return (
//     <div className="App">
//     <Router onClickCart={onClickCart} cartProducts={cartProducts}/>
//     </div>
//   );
// }

// export default App;
