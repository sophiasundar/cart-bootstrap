function Nav({cartItems}){

    const noItemsCart =cartItems.length;

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container px-4 px-lg-5">
             <a className="navbar-brand" href="#!">Start Bootstrap</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <form className="d-flex">
                      <button className="btn btn-outline-dark" type="submit">
                          <i className="bi-cart-fill me-1"></i>
                          Cart
                           <span className="badge bg-dark text-white ms-1 rounded-pill">{noItemsCart}</span>
                      </button>
                    </form>
                </div>
           </div>
         </nav>
    )
}

export default Nav;