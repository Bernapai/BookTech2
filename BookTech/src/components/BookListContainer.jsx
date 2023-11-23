import { useEffect,useState } from 'react';
import { useParams } from 'react';


import Container from 'react-bootstrap/Container';

import { BooksList } from '../data/Books';
import { ItemList } from './BookList';

export const ItemListContainer=(props)=>{
    const [items, setItems] =useState([]);
   
    const { id } = useParams();
   
    useEffect(() =>{
      const mipromise = new Promise((resolve, reject) =>{
        setTimeout(() => {resolve(BooksList)}, 2000)
      });
      mipromise.then((response) => {
        if(!id) {
          setItems(response)
        } else{
          const filterByCategory= response.filter ( book => book.categoria === id
            );
            setItems(filterByCategory)
        };
        
      });
    }, [id])
        
    
    
    return(
       <Container className='mt-4'>
           <h1>{props.greeting}</h1>
           <ItemList books={BooksList}/>
        </Container>
    )
}