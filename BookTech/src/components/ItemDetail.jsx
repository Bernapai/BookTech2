import {ItemCounter} from "./ItemCounter"
import { CartContext } from "../contexts/CartContext"

import { useContext } from "react"


export const ItemDetail= ({item}) =>{
  const {onAdd}=useContext(CartContext)
  
  const add=(quantity)=>{
    onAdd(item, quantity);
  };
    return(
<>
  <h1>{item.title}</h1>
  <img src={item.image} />
  <h3>{item.stock}</h3>
  <ItemCounter onAdd={add} stock={item.stock} initial={1}/>
</>
    )
}