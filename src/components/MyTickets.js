import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const MyTickets = () => {
  // const [emailAddress, setEmailAddress] = useState('');
  //  value={{ emailAddress }}
  // handleSubmit(event) {
  //   event.preventDefault();
  // }
  const lookupOrdersByEmail = async (emailAddress = '') => {
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      // body: queryString.stringify({email_address: emailAddress}) 
    }
    try {
      const fetchResponse = await fetch('http://localhost:8888/toobs-lottery/lookup-orders-by-email', settings)
      const data = await fetchResponse.json()
      return data
    } catch (e) {
      return e
    }    
  }
  return (
    <section id="my-tickets" className="py-5">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center mb-4">My Tickets</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={7} lg={6} lg={5}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
                <Form.Text className="text-muted">Lookup my tickets.</Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Lookup
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MyTickets
