import { Book } from "./Book";


export const ItemList = ({books}) => {
    return(
    <div className="d-flex">
         {books.map((book) => (
             <Book key={book.id} book={book}/> 
      ))};
    </div>
    );
   };


