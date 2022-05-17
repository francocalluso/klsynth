import ItemCount from "../ItemCount/ItemCount"
import {Button, Card} from 'react-bootstrap'
import './Item.css'
import { Link } from "react-router-dom"


function Item({id, name, price, description, stock, img}) {


  return (
    <Card className='m-4 bg-trans itemHover' style={{ width: '18rem' }} id={id}>
        <Link to={`/detalle/${id}`}>
        <Card.Img className='p-3 img-blend' variant="top" src={img} />
        <Card.Body>
          
            <Card.Title >{name}</Card.Title>
            <Card.Subtitle >{price}</Card.Subtitle>
            <Card.Text className='text-secondary'>
                {description}
            </Card.Text>
        </Card.Body>
        </Link>       
    </Card>
      )
}

export default Item