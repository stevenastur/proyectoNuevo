import { Col, Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { CarritoCompras } from "../../common/carrito";
import logo from "../../../assets/logo.jpg";
import { useEffect, useState } from "react";

const Header = () => {
  const [navbarTransparent, setNavbarTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarTransparent(false);
      } else {
        setNavbarTransparent(true);
      }
    };

    // Agrega un evento de desplazamiento para controlar la transparencia del Navbar al hacer scroll
    window.addEventListener("scroll", handleScroll);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        className={`header ${navbarTransparent ? "transparent" : ""}`}
        expand="lg"
      >
        <Container>
          <Col xs={1}>
            <Navbar.Brand href="/" className="brand-header">
              <Image src={logo} roundedCircle />
            </Navbar.Brand>
          </Col>

          <Col xs={10} className="etiquetas">
            <Nav className="ml-auto">
              <NavLink className="link-header" to="/productos">
                Productos
              </NavLink>
              <NavLink className="link-header" to="/">
                Home
              </NavLink>
            </Nav>
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
