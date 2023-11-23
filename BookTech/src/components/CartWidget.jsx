
import cart from "../assets/cart.svg"

export const CartWidget=()=>{
    return(
        <>
         <img src={cart} alt="Carrito" width={35}/>
         <span>0</span>
        </>
          )
}