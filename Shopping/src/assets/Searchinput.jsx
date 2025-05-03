import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../context/search';
function Searchinput() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const [values,setValues]=useSearch()
    const navigate=useNavigate()
    function handleSubmit(e)
    {
        e.preventDefault()
        fetch(`https://male-fashion-pi.vercel.app/api/product/search/${values.keyword}`).then((res1)=>{
            res1.json().then((res2)=>{
                setValues({...values,result:res2})
                navigate('/Search')
            })
        })
    }
  return (
    <div>
        <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs="auto" className='d-flex'>
            <Form.Control
              type="search"
              placeholder="Search"
              value={values.keyword}
              className=" mr-sm-2 mt-1 rounded-0"
              onChange={(e)=>setValues({...values,keyword:e.target.value})}
            />
            <button type="submit" className="bg-white border-0 ms-4 pe-4">
  <img src="/search.png" alt="search" />
</button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Searchinput