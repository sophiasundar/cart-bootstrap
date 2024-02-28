
import './App.css';

// import React, {useState} from "react";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Cardss from './Components/Cardss';
import store from './Components/utils/store';
import { Provider } from 'react-redux';
// import Items from './items'
// import Cartmodel from './Components/CartModel';

const item = [
  {
    id: "1",
    name: "Shoes",
    rating: "false",
    price: "$40.00 - $80.00",
    disabled:"false",
  },
  {
    id: "2",
    name: "Washing Machine",
    rating: "true",
    price: "$180.00",
    disabled:"false",
  },
  {
    id: "3",
    name: "Shirt",
    rating: "false",
    price: "$25.00",
    disabled:"false",
  },
  {
    id: "4",
    name: "Popular Item",
    rating: "true",
    price: "$40.00",
    disabled:"false",
  },
  {
    id: "5",
    name: "Book",
    rating: "false",
    price: "$25.00",
    disabled:"false",
  },
  {
    id: "6",
    name: "Smart tv",
    rating: "false",
    price: "$120.00 - $280.00",
    disabled:"false",
  },
  {
    id: "7",
    name: "Shorts",
    rating: "true",
    price: "$18.00",
    disabled:"false",
  },
  {
    id: "8",
    name: "Smart phone",
    rating: "true",
    price: "$40.00",
    disabled:"false",
  },
];

function App() {
   
 
 


  return (
    <>
    <Provider store={store}>
      <Header></Header>
    <div className="App">
        {/* <Cartmodel></Cartmodel> */}
      {
        item.map((element,index )=>{
          return <Cardss element={element} key ={index} />
          
        })
      }
        <Footer></Footer>
    </div>
    </Provider> 
    {/* // provider for joining store and app */}
  </>
  );
}

export default App;
