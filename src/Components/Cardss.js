import "bootstrap/dist/css/bootstrap.min.css"
import "./Cartitems.css"
import Rating from "./Rating"


const Cardss=({element})=>{
    console.log(element)  
    
    const{name,price}=element  


  //   const addtocart = ()=>{
  //     element.onclick(element.item);
  // }
    return(
        <>
        <div className="col-6 col-md-4 col-lg-3 p-3">
          <div className="cborder mb-5 text-center pb-4">
          <div className="img" style={{ height: 150 }}>450 X300</div>
            <h2>{name}</h2>
            <h3><Rating></Rating></h3>
            <h4>{price}</h4>
            <button className="btn-danger" >Add to cart</button>
            {/* <button className="btn-danger" disabled ={element.disabled === "false" ? false : true} onClick={addtocart}><span>{element.disabled === "false" ? "Add to cart" : "Added to cart"}</span></button> */}
          </div>
        </div>
        </>
    )
}

export default Cardss;