import ItemCount from "../ItemCount/ItemCount"
import {Card} from 'react-bootstrap'


function Item({id, name, description, stock, img}) {
  return (
    <Card style={{ width: '18rem' }} id={id}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <ItemCount stock={stock}/>
    </Card.Body>
  </Card>
    // <div key={id}>
    //     <h4>{name}</h4>
    //     <ItemCount stock={stock}/>
    // </div>
      )
}

export default Item