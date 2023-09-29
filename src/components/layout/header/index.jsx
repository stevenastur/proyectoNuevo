import { Col, Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { CarritoCompras } from "../../common/carrito";
import logo from "../../../assets/logo.jpg";


const Header = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="dark">
        <Container>
          <Col>
            <Navbar.Brand href="/">
              <Image src={logo} roundedCircle />
            </Navbar.Brand>
          </Col>


            <Col xs={9}>
              <NavLink className="link" to="/">
                Home
              </NavLink>
              <NavLink className="link" to="/productos">
                Productos
              </NavLink>
            </Col>

            <Col>
              <CarritoCompras className="carrito"/>
            </Col>

        </Container>
      </Navbar>
    </>
  );
};

export { Header };
