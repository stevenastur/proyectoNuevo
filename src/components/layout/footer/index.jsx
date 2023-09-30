import { Col, Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { CarritoCompras } from "../../common/carrito";
import logo from "../../../assets/logo.jpg";

const Footer = () => {
  return (
    <>
      <Navbar className="footer">
        <Container >
          <Col xs={1}>
            <Navbar.Brand href="/">
              <Image src={logo} roundedCircle />
            </Navbar.Brand>
          </Col>
          <Col xs={2}>
            <h1>Navegación</h1>
            <NavLink className="link" to="/">
              Inicio
            </NavLink>
            <NavLink className="link" to="/productos">
              Productos
            </NavLink>
          </Col>
          <Col xs={5} className="datos">
            <h1>Contacto</h1>
            <div>
              <div>
                <h2>Lomas de Zamora</h2>
              </div>
              <div>
                <h2>cocinandoconbigote@gmail.com</h2>
              </div>
            </div>
          </Col>

          <Col xs={5} className="datos">
            <h1>Atencion al cliente</h1>
            <h2>Horarios de servicio al WhatSapp:</h2>
            <h3>Lunes a Viernes</h3>
            <h3>Horarios: 10 a 17 horas.</h3>
          </Col>
        </Container>
      </Navbar>
    </>
  );
};

export { Footer };
