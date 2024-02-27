import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import { useSelector } from "react-redux"


const Header=(props)=>{

    const CartItems=  useSelector(store=>store.cart.items)

    return(
        <React.Fragment>
            <nav class="navbar navbar-light bg-light justify-content-around">
        <i href="#"class="navbar-brand">Shoping.in</i>

        <button class="addtoc px-4" onClick={props.onclick} > <i class="fas fa-shopping-cart"></i><i className="px-2">Cart {CartItems.length}</i>
        <span className="noofitems bg-dark text-white py-1 px-2">{props.noofitems}</span></button> 
            </nav>

            <div className="jumbotron-fluid text-center text-white bg-dark" style={{ padding: "90px" }}>
        <p className="display-1" style={{ fontWeight: "bold" }}>Shop in style</p>  

        <p className="mutdis text-muted">With this shop hompeage template</p>
           </div>
        </React.Fragment>
    ) 
}

export default Header;