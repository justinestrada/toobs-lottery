
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  const current_year = new Date().getFullYear()
	return (
    <footer className="bg-secondary py-5">
      <Container>
        <Row>
          <Col className="text-white text-center">Toobs Distribution &copy; {current_year}</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer