import "bootstrap/dist/css/bootstrap.min.css"
import "./Cartitems.css"
import React from "react"

   const Cartitem = (props) => {
    const removehandler= ()=>{
      props.onremove(props.value);
    }


    return (
      <React.Fragment>
        <li className="cart-item bg-light text-dark" key={props.value.id}>
          <div >
            <h2>{props.value.name}</h2>
            <h4>{props.value.price}</h4>
          </div>
          <div><button className="btn-danger" onClick={removehandler}>Remove</button></div>
        </li>
        </React.Fragment>
      );
}

export default Cartitem;