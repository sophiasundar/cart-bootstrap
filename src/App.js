
import './App.css';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Rating from './Components/Rating';



function App() {
    // const [cartItems, setCartItems] = useState([])

    //  const addItem = (item)=>{
    //   const getData = productdata.filter((inp)=> inp.id === item );
    //     setCartItems([...cartItems, ...getData]);
    //  }

    //  const removeItem = (item) => {
    //   console.log("remove item", item);
    //   const fData = cartItems.filter((obj) => obj.id !== item);
    //   console.log(fData);
    //   setCartItems([...fData]);
    // }


  return (
    <div className="App">
     <Header></Header>
     <productdata></productdata>
     {/* <Nav></Nav> */}
     {/* <Nav cartItems={cartItems}/> */}

      {/* <Cart></Cart>  */}

      <Rating></Rating>
      {/* <Home productdata={productdata} addItem={addItem} cartItems={cartItems}/> */}




    </div>
  );
}

export default App;
