import { useReducer, useState } from 'react';
import './App.css';
import { FilteredMenuContext } from './contexts/FilteredMenu';
import { ItemTypeContext } from './contexts/Item.js';
import data from './data/menuData.json';
import Header from './header/Header';
import ItemList from './main/ItemList';
import './styles/main.css';
import ButtonBack from './main/ButtonBack';
import {WholeOrderPriceContext} from "./contexts/WholeOrderPrice";
import {TotalOrderCounContext} from "./contexts/TotalOrdersCount";
import { ItemCountContetx } from './contexts/ItemCount';
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
  const [mainMenu, setMainMenu] = useState(true);
  const [totalPrice,setTotalPrice] = useState(0)
  const [totalCount,setTotalCount] = useState(0)
  const [filteredMenu, dispatch] = useReducer(reducer, [])
  return (
    <div>
      <WholeOrderPriceContext.Provider value={[totalPrice,setTotalPrice]}>
        <TotalOrderCounContext.Provider value={[totalCount,setTotalCount]}>
      <FilteredMenuContext.Provider value={[filteredMenu, dispatch]}>
        <ItemTypeContext.Provider value={[mainMenu, setMainMenu]}>
          <Header />
          {!mainMenu?<ButtonBack/>:null}
          
          <ItemList />
        </ItemTypeContext.Provider>
      </FilteredMenuContext.Provider>
      </TotalOrderCounContext.Provider>
      </WholeOrderPriceContext.Provider>
    </div>
  );
}

export default App;
