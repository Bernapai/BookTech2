import Container from "react-bootstrap/esm/Container";
import { Book } from "./Book";


export const BookList = ({books}) => {
    return(
    <Container className="d-flex">
         {books.map((book) => (
             <Book key={book.id} book={book}/> 
      ))};
    </Container>
    );
   };


