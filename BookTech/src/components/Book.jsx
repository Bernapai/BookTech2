import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Book=({book})=>{
    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={book.image} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          {book.description}
        </Card.Text>
     <Link to ={"/books/${book.id}"}<Button variant="primary">{book.price}USD</Button><Link/>
      </Card.Body>
    </Card>
    )
}




