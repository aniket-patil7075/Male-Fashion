import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useSearch } from '../context/search';
function Search() {
    const [values,setValues]=useSearch()
  return (
    <div>
        <h5 className='mb-4'>
            {
                values?.result.length<1?"No Products Found":`Found ${values?.result.length} Products`
            }
        </h5>
        <Container>
        <div className="row row-cols-1 row-cols-md-3 g-4">
    {
      values?.result.map((item,index)=>{
        return (
          
          <div className="col" key={index}>
          <Card style={{ width: '18rem' }} key={index}>
            <Card.Img variant="top" className='w-100 mx-auto d-block' src={`http://localhost:4300/api/product/getphoto/${item._id}`} />
            <Card.Body className='text-center'>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
               {item.description}
               
               <h4>₹ {item.price}</h4>
              </Card.Text>
                <Button variant='success'>Add To Cart</Button>
            </Card.Body>
          </Card>
          </div>
          
        )
      })
    }
    </div> 
</Container>
    </div>
  )
}

export default Search