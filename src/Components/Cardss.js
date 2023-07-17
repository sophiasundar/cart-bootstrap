import "bootstrap/dist/css/bootstrap.min.css"
import "./Cartitems.css"
import Rating from "./Rating"


const Cardss=({element})=>{
    console.log(element)  
    
    const{name,price}=element  

    return(
        <>
          <li className="cart-item bg-light text-dark" >
          <div>
          <div className="img" style={{ height: 150 }}>450 X300</div>
            <h2>{name}</h2>
            <h3><Rating></Rating></h3>
            <h4>{price}</h4>
          </div>
          <div><button className="btn-danger" >Remove</button></div>
        </li>
        </>
    )
}

export default Cardss;