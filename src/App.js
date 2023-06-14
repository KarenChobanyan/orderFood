import { useReducer, useState } from 'react';
import './styles/App.css';
import Header from './header/Header';
import ItemList from './main/ItemList';
import './styles/main.css';
import './styles/cart.css'
import './styles/historyPage.css'
import {WholeOrderPriceContext} from "./contexts/WholeOrderPrice";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainMenu from './main/MainMenu';
import { Provider } from 'react-redux';
import Cart from './cart/Cart';
import store from './store';
import HistoryMain from './history/HistoryMain';

function App() {
  const [totalPrice,setTotalPrice] = useState(0)

  return (
    <BrowserRouter>
    <Provider store={store}>
    <div>
      <WholeOrderPriceContext.Provider value={[totalPrice,setTotalPrice]}>
          <Header />
          <Routes>
            <Route path='/' element={<MainMenu />}/>
            <Route path='/menu/:category' element={<ItemList/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/history' element={<HistoryMain/>}/>
          </Routes>
      </WholeOrderPriceContext.Provider>
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
