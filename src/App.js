import logo from './logo.svg';
import bg_star from './images/bg-star.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

function App() {
  return (
    <main className="App">
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Toobs Lottery</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section id="lottery">
        <img src={bg_star} className="lottery-bg" alt="Background"/>
        <Container className="relative">
          <div className="countdown-wrapper">
            <ul>
              <li><span id="days"></span>days</li>
              <li><span id="hours"></span>Hours</li>
              <li><span id="minutes"></span>Minutes</li>
              <li><span id="seconds"></span>Seconds</li>
            </ul>
          </div>          
        </Container>
      </section>
    </main>
  );
}

export default App;
