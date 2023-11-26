import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';


import Container from 'react-bootstrap/Container';

import { BooksList } from '../data/Books';
import { BookList } from './BookList';

export const BookListContainer=(props)=>{

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
          const filterByCategory= response.filter ( book => book.categoria == id );
            setItems(filterByCategory)
        };
        
      });
    }, [id]);
        
    
    
    return(
       <Container className='mt-4'>
           <h1 className=" title-booktech">{props.greeting}</h1>
           <BookList books={BooksList}/>
        </Container>
    )
}