import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import './CartWidget.css'
function BasicExample() {
  return (
    <Navbar bg="secondary" variant="light">
        <Container>
          <Navbar.Brand href="#home">React Machine</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Icarian</Nav.Link>
            <Nav.Link href="#pricing">Precor</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
  );
}

export default BasicExample;