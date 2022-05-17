import Item from "../Item/Item";
import {Container, Row} from 'react-bootstrap'

import './ItemList.css'


function ItemList({productos}) {

  return (
      <Container>
          <Row>
        {productos.map((prod) => <Item 
                                    key={prod.id}
                                    id={prod.id}
                                    className='itemHover' 
                                    name={prod.name} 
                                    stock={prod.stock} 
                                    price={prod.price} 
                                    description={prod.description} 
                                    initial={1} 
                                    img={prod.img}/>)}
          </Row>
      </Container>
  )
}

export default ItemList