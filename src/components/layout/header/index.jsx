import { Col, Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { CarritoCompras } from "../../common/carrito";
import logo from "../../../assets/logo.jpg";

const Header = () => {
  return (
    <>
      <Navbar className="header">
        <Container >
          <Col xs={1}>
            <Navbar.Brand href="/">
              <Image src={logo} roundedCircle />
            </Navbar.Brand>
          </Col>

          <Col xs={10}>
            <NavLink className="link" to="/">
              Home
            </NavLink>
            <NavLink className="link" to="/productos">
              Productos
            </NavLink>
          </Col>

          <Col xs={1}>
            <CarritoCompras className="carrito" />
          </Col>
        </Container>
      </Navbar>
    </>
  );
};

export { Header };
