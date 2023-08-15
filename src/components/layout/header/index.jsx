import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.scss"

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Cocinando con bigotes</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/productos">Productos</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export { Header };
