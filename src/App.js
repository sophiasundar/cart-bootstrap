
import './App.css';

import React, {useState} from "react";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Rating from './Components/Rating';
import Items from './items'
import Cartmodel from './Components/CartModel';

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
   
  const[cart,setcart]=useState(false);
  const [cartitems, setcartitems] = useState([]);
  const [data, setdata]= useState(item);

   const addtocarthandler =(props)=>{
      setcartitems( prevSelected => [...prevSelected, props]);
      const index = data.indexOf(props);
      setdata([...data.slice(0,index),{...props, disabled:"true"} ,...data.slice( index+1 ,data.length)]);
  };
  
  const removefromcart = props =>{
    const UpdatedItems = cartitems.filter(item => item.id !== props.id);
    setcartitems([...UpdatedItems]);
    const index = data.findIndex((item) => item.id === props.id);
    setdata([...data.slice(0,index),{...props, disabled:"false"} ,...data.slice( index+1 ,data.length)]);
  }

  const setcarthandler = () =>{
    setcart(true);
  }
  
  const closecarthandler = () =>{
    setcart(false);
  }


 


  return (
    
    <div className="App">
        <Cartmodel></Cartmodel>
      {cart && <Cartmodel onclick={closecarthandler} value={cartitems} onremove={removefromcart}/>}
    <Header onclick={setcarthandler} noofitems={cartitems.length}/>
    <br/>
      <Items onclick={addtocarthandler} data={data}/>
     {/* <Header></Header> */}
     
     <Rating></Rating>
     {/* <Footer></Footer> */}
    
    
    </div>
  
  );
}

export default App;
