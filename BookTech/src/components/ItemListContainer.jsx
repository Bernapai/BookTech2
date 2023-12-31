import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

import {getFirestore,  collection, getDocs, query, where } from "firebase/firestore"

import Container from 'react-bootstrap/Container';

import {  ItemList } from './ItemList';

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    const db = getFirestore();
    
    
    const refCollection = !id
      ? collection(db, 'items')
      : query(collection(db, 'items'), where('categoria', '==', id));

    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) {
        console.log('No hay libros encontrados');
      } else {
        setItems(
          snapshot.docs.map((doc) => {
            return {...doc.data(), id: doc.id};
          })
        );
      }
    });
  }, [id]);


    
    
    return(
       <Container className='mt-4'>
           <h1 className=" title-booktech">{props.greeting}</h1>
           <ItemList items={items} />
        </Container>
    )
}