import { useEffect,useState } from 'react';
import { useParams } from 'react';


import Container from 'react-bootstrap/Container';

import { BooksList } from '../data/Books';
import { BookDetail } from './BookDetail';


export const ItemDetailContainer=()=>{
    const [book, setItem] =useState(null);
   
    const { id } = useParams();
   
    useEffect(() =>{
      const mipromise = new Promise((resolve, reject) =>{
        setTimeout(() => {resolve(BooksList)}, 1000)
      });
      mipromise.then((response) => {
        
          const findById= response.find ((book) => book.id === Number(id)
            );
            setItem(findById)
       
        
      });
    }, [id])
        
    
    
    return(
       <Container className='mt-4'>
          {book ? <BookDetail  book={book}/> : <>Loading..</>
        </Container>
    )
}