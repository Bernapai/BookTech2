import Container from "react-bootstrap/esm/Container";



export const ItemList = ({items}) => {
    return(
    <Container className="d-flex">
         {items.map((item) => (
             <Item key={item.id} item={item}/> 
      ))};
    </Container>
    );
   };


