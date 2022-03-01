
import { Container, Row, Col, Accordion } from 'react-bootstrap'

const FAQ = () => {
  return (
    <section id="faq" className="py-5">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center mb-4">FAQ</h2>
          </Col>
        </Row>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Do Lottery Tickets carry over to the next month?</Accordion.Header>
            <Accordion.Body>
              No not at this time. After each month the lottery resets.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  )
}

export default FAQ
