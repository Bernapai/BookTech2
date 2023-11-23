export const BookDetail= ({book}) =>{
    return(
<>
  <h1>{book.title}</h1>
  <img src={book.image} />
  <div></div>
</>
    )
}