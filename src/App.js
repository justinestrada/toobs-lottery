import bg_star from './images/bg-star.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap'
import { Card, Button } from 'react-bootstrap'
import MainNavbar from './components/MainNavbar'
import Footer from './components/Footer'
import Countdown from './components/Countdown'
import MyTickets from './components/MyTickets'
import FAQ from './components/Faq'

function App() {
  const prize_amount = 5000
  return (
    <main className="App">
      <MainNavbar />
      <section id="lottery" className="d-flex justify-content-center align-items-center py-5">
        <img src={bg_star} className="lottery-bg" alt="Background"/>
        <Container className="text-center relative">
          <div className="lottery-prize mb-5">
            <div className="lottery-prize_amount">${prize_amount}</div>
            <div className="lottery-prize_text">in prizes!</div>
          </div>
          <div>
            <div className="mb-3" style={{fontSize: '24px', color: 'white', fontWeight: 'bold' }}>Get your tickets now!</div>
            <Row className="justify-content-center">
              <Col md={7} lg={6} lg={5}>
                <Countdown />
              </Col>
            </Row>
            <div className="mt-3" style={{ color: 'white', fontWeight: 'bold' }}>until the draw</div>   
          </div>
        </Container>
      </section>
      <MyTickets />
      <section id="how-to-enter" className="py-5">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center mb-4">How To Enter</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="mb-3 mb-lg-0">
              <Card className="w-100">
                <Card.Body>
                  <Card.Title>Shop Toobs</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Step 1</Card.Subtitle>
                  <Card.Text>
                    Earn 1 lottery ticket for every $500 you spend.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} className="mb-3 mb-lg-0">
              <Card className="w-100">
                <Card.Body>
                  <Card.Title>Wait For The Draw</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Step 2</Card.Subtitle>
                  <Card.Text>
                    The previous months Lottery Draw happens on the 1st of every month.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} className="mb-3 mb-lg-0">
              <Card className="w-100">
                <Card.Body>
                  <Card.Title>Check For Prizes</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Step 3</Card.Subtitle>
                  <Card.Text>
                    Once the Lottery round is over. Come back here to see if you've won. Then repeat step 1.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Button variant="primary" href="https://toobsdistribution.com" target="_blank">Shop Toobs</Button>
            </Col>
          </Row>
        </Container>
      </section>
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
