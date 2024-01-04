import { useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";

export const ItemCounter = ({ onAdd, stock, initial }) => {
    
  const [count, setCount]=useState(initial)

  const handleIncrease=()=>{
    if(stock > count){
      setCount(prev=> prev + 1)
    };
    
  };

  const handleDecrease=()=>{
    if(count > 1 ){
      setCount(prev=> prev - 1)
    };
    
  };

  const handleAdd=()=>{
    onAdd(count);
    setCount(initial);
  };
  
  
  return (
      <>
      <br />
      <br />
      <div style={{display:"flex"}}>
        <div style={{fontSize:14, marginRight: 10, cursor: "pointer" }} onClick={handleDecrease}>-</div>
        <mark style={{ color: "black" }}>{count} </mark>
        <div style={{fontSize:14, marginLeft: 10, cursor: "pointer" }} onClick={handleIncrease}>+</div>
      </div>
      <br />
      <button className="botonCompra2" onClick={handleAdd}>Agregar al carrito</button>
       
      </>
    );
  };
  