import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const Item=({item})=>{
    return(
      <div className="card-container">
        <Card style={{ width: '18rem' }} className="border-white">
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text className="white-text">
          {item.description}
        </Card.Text>
     <Link to ={"/items/${item.id}"}>
       <Button variant="primary">{item.price}USD</Button>
     </Link>
      </Card.Body>
    </Card>
    </div>
    )
}




