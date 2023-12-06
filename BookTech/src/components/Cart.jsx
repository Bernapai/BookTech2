import {Container, Button, Form} from "react-bootstrap"
import {getFirestore,  collection, addDoc, } from "firebase/firestore"

import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import { CartContext } from "../contexts/CartContext"
  
const initialValues={  
 name:"",
phone:"",
email:"",
}


export const Cart=()=>{
    const {clear, items, onRemove}=useContext(CartContext);

    const[ buyer, setBuyer ]= useState(initialValues);

    const navigate=useNavigate();

    const total= items.reduce((acumulador, valorActual)=> acumulador + valorActual.quantity * valorActual.price, 0);

    const handleChange=(event)=>{
        setBuyer(buyer=>{
            return{
                ...buyer,
                [event.target.name]:event.target.value,
            }
        });
    };
    
    const sendOrder=()=>{
       const order={
        buyer,
        items,

       };
       const db= getFirestore();
       const orderCollection=collection(db, "orders");

       addDoc(orderCollection, order).then(({id}) => {
       if(id){
         alert("Su compra ha sido completada");
         setBuyer(initialValues);
         clear();
       };

       }
       );
    };


    if(!items.lenght){
        return( <Container className='mt-4'>
                   <h1 className="Noproducts">
                   No hay nada en el carrito, porfavor seleccione un producto 
                   </h1>
                   <button onClick={() => navigate ("/")}>
                    Volver al inicio
                   </button>
             </Container>
             );
    };

    return(
        <Container className='mt-4'>
            <h1> Welcome to your cart</h1>
            {items?.map(item=>
                  <div key={item.id}>
                    <h1>{item.title}</h1>
                    <h3>{item.price} </h3>
                    <img src={item.image} width={300} />
                    <td> {item.quantity} </td>
                    <td onClick={() => onRemove(item.id)}> X </td>
                    <h3>Total: {total} </h3>
                  </div>)}
                  <button onClick={clear}> Vaciar Carrito</button>
                  <hr />
                  <Form>
                    <Form.Group className="mb-3" >
                      <Form.Label>Email </Form.Label>
                      <Form.Control type="text" value={buyer.email} onChange={handleChange} name="email" required/>
                  </Form.Group >

                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={buyer.name} onChange={handleChange} name="name" required/>
                 </Form.Group>

                 <Form.Group className="mb-3" >
                    <Form.Label>Phone</Form.Label>
                     <Form.Control type="text" value={buyer.phone} onChange={handleChange} name="phone" required/>
                 </Form.Group>

                <Button variant="primary" type="submit" onClick={sendOrder}>
                    Enviar
                </Button>
                 </Form>

        </Container>
    )
}