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
        <div style={{fontSize:14}} onClick={handleDecrease}>-</div>
        <mark>{count} </mark>
        <div style={{fontSize:14}} onClick={handleIncrease}>+</div>
      </div>
      <br />
      <button onClick={handleAdd}>Agregar al carrito</button>
       
      </>
    );
  };
  