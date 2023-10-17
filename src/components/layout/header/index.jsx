import { Col, Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { CarritoCompras } from "../../common/carrito";
import logo from "../../../assets/logoMejorado.png";
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        className= "header"
        expand="lg"
      >
        <Container>
          <Col xs={1}>
            <div className="brand-header">
              <Image src={logo} roundedCircle className="imgHeader" />
            </div>
          </Col>

          <Col xs={10} className="etiquetas">
            <Nav className="ml-auto">
              <NavLink className="link-header" to="/">
                Productos
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
