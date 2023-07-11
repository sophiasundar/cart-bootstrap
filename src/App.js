
import './App.css';
import Card from './Components/Card';
import CartModel from './Components/CartModel';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Items from './Components/Items';
import Rating from './Components/Rating';



function App() {
    

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

 


  return (
    <>
    <div className="App">
     <Header></Header>
     {/* <CartModel></CartModel> */}
     <Rating></Rating>
     <Footer></Footer>
    
     {/* <Card></Card> */}
     {/* <Items></Items> */}
        
       




    </div>
    </>
  );
}

export default App;
