import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';


import Container from 'react-bootstrap/Container';

/*import {getFirestore, getDoc, doc} from "firebase/firestore"*/


import { ItemDetail } from './ItemDetail';


/*export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  /*useEffect(()=>{
    const db= getFirestore();
    const refDoc= doc(db, "items", "java1");
    getDoc(refDoc).then((snapshot) =>{
      console.log({id: snapshot.id, ...snapshot.data()})
    }
    );
   },
   [] );

  useEffect(() => {
    const mipromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(BooksList);
      }, 1000);
    });

    mipromise.then((response) => {
      const findById = response.find((book) => book.id === Number(id));
      setItem(findById);
    });
  }, [id]);

  return (
    <Container className='mt-4'>
      {book ? <BookDetail book={book} /> : <>Loading..</>}
    </Container>
  );
};*/
