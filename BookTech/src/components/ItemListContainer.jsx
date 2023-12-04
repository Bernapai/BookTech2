import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

import {getFirestore,  collection, getDocs, } from "firebase/firestore"

import Container from 'react-bootstrap/Container';


import {  ItemList } from './ItemList';

export const ItemListContainer=(props)=>{

    const [items, setItems] =useState([]);
   
    const { id } = useParams();
    console.log(id),
    useEffect(() =>{
      const db= getFirestore()
      const refCollection=collection(db, "items");
    
    
      getDocs(refCollection).then((snapshot)=>{
        if(snapshot.size===0) console.log("no results")
        else
        setItems(
         snapshot.docs.map((doc)=>{
        return{id:doc.id, ...doc.data()};
        }));
      }
      );
    },
      []);
    
    /*useEffect(() =>{
      const dn=getFirestore(),

      const q= query(
        collection(db, "items"),

        where("categoryId", "==", "Javascript"),
      );
      getDocs(q).then((snapshot) =>{
       if(snapshot.size===0)console.log("no results");
       else
        console.log(
          snapshot.docs.map((doc) =>{
            return{id:doc.id, ...doc.data()};
          }
          )
          );
      }
       );
    },
      []);

  
   
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
    }, [id]);*/
        
    
    
    return(
       <Container className='mt-4'>
           <h1 className=" title-booktech">{props.greeting}</h1>
           <ItemList items={ItemList}/>
        </Container>
    )
}