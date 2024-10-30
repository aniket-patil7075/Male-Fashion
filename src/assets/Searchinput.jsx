import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../context/search';
function Searchinput() {
    const [values,setValues]=useSearch()
    const navigate=useNavigate()
    function handleSubmit(e)
    {
        e.preventDefault()
        fetch(`http://localhost:4300/api/product/search/${values.keyword}`).then((res1)=>{
            res1.json().then((res2)=>{
                setValues({...values,result:res2})
                navigate('/Search')
            })
        })
    }
  return (
    <div>
        <Form inline onSubmit={handleSubmit}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="search"
              placeholder="Search"
              value={values.keyword}
              className=" mr-sm-2"
              onChange={(e)=>setValues({...values,keyword:e.target.value})}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Searchinput