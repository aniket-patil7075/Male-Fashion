import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Categoryform({ handleSubmit, value, setValue }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Enter Category Name : " value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Group>

        <Button variant="dark" type="submit" className="heroButton px-4 py-2">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Categoryform;
