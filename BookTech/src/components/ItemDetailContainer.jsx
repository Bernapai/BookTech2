import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';


import Container from 'react-bootstrap/Container';

import {getFirestore, getDoc, doc} from "firebase/firestore"


import { ItemDetail } from './ItemDetail';


export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  
  useEffect(()=>{
    const db= getFirestore();
    const refDoc= doc(db, "items", id);
    getDoc(refDoc).then((snapshot) =>{
      setItem({...snapshot.data(), id: snapshot.id })
    });
  
   },[id] );
   

  

  return (
    <Container className='mt-4'>
      {item ? <ItemDetail item={item} /> : <>Loading..</>}
    </Container>
  );
};