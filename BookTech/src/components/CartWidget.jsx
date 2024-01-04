import {Link} from "react-router-dom"
import cart from "../assets/cart.svg"
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";


export const CartWidget=()=>{
    const {items}= useContext(CartContext);

    const total= items.reduce((acumulador, valorActual)=> acumulador + valorActual.quantity, 0);
  
    return(
        <Link to= "/cart">
         <img src={cart} alt="Carrito" width={35}/>
         <span className="cart-number"> {total} </span>
        </Link>
          );
};