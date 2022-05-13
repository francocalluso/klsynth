import Item from "../Item/Item";
import {Container, Row} from 'react-bootstrap'

const productos = [
    {id:'1', name:'Moog Minitaur', description:'Sintetizador analogico de bajos', stock:'4', img:'https://res.cloudinary.com/dkhnmmnqo/image/upload/v1652482241/moogminitaur_xo0o3z.jpg'},
    {id:'2', name:'Nord Drum', description:'Lorem Ipsum bla bla bla', stock:'15', img:'https://res.cloudinary.com/dkhnmmnqo/image/upload/v1652482277/norddrum-top_xl_q9ku6y.jpg'},
    {id:'3', name:'Korg Minilogue xd', description:'blablabla', stock:'3', img:'https://res.cloudinary.com/dkhnmmnqo/image/upload/v1652482319/korgminilog_i2tp6t.jpg'},
    {id:'4', name:'Arturia Microfreak', description:'Lorem ipsum', stock:'4', img:'https://res.cloudinary.com/dkhnmmnqo/image/upload/v1652482350/arturiamicrofreak_omhcee.jpg'},
    {id:'5', name:'Arturia Minibrute', description:'Lorem ipsum', stock:'10', img:'https://res.cloudinary.com/dkhnmmnqo/image/upload/v1652482378/minibrute-image_tnuwxs.png'}
  ]
  


function ItemList() {
  return (
      <Container>
          <Row>
        {productos.map((prod) => <Item key={prod.id} name={prod.name} stock={prod.stock} initial={1} img={prod.img}/>)}
          </Row>
      </Container>
  )
}

export default ItemList