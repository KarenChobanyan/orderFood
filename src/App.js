import { useReducer, useState } from 'react';
import './App.css';
import { FilteredMenuContext } from './contexts/FilteredMenu';
import data from './data/menuData.json';
import Header from './header/Header';
import ItemList from './main/ItemList';
import './styles/main.css';
import './styles/cart.css'
import {WholeOrderPriceContext} from "./contexts/WholeOrderPrice";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainMenu from './main/MainMenu';
import { Provider } from 'react-redux';
import {store} from './redux/store/store'
import Cart from './cart/Cart';



const menu = [...data]
function reducer(state, actiion) {
  switch (actiion.type) {
    case "snaks":
      return (menu.filter((el) => el["sub-items"][0].category_name === "Appeteasers"));
    case "sharing platters":
      return (menu.filter((el) => el["sub-items"][0].category_name === "Sharing platters"));
    case "desserts":
      return (menu.filter((el) => el["sub-items"][0].category_name === "Dessert")[0]["sub-items"]);
    case "fast Food":
      return (menu.filter((el) => el["sub-items"][0].cuisine_name === "Fast Food"));
    case "peri-peri chicken":
      return (menu.filter((el) => el["sub-items"][0].category_name === "Peri-peri chicken"));
    case "side Dishes":
      return (menu.filter((el) => el["sub-items"][0].category_name === "Sides"));
    case "burgers":
      return (menu.filter((el) => el["sub-items"][0].category_name === "Burgers, pitas, wraps"));
    case "salads":
      return (menu.filter((el) => el["sub-items"][0].category_name === "Salads"));


  }

}
function App() {
  const [totalPrice,setTotalPrice] = useState(0)
  const [totalCount,setTotalCount] = useState(0)
  const [filteredMenu, dispatch] = useReducer(reducer, [])

  return (
    <BrowserRouter>
    <Provider store={store}>
    <div>
      <WholeOrderPriceContext.Provider value={[totalPrice,setTotalPrice]}>
      <FilteredMenuContext.Provider value={[filteredMenu, dispatch]}>
          <Header />
          <Routes>
            <Route path='/' element={<MainMenu />}/>
            <Route path='/menu/:category' element={<ItemList/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
      </FilteredMenuContext.Provider>
      </WholeOrderPriceContext.Provider>
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
