import { Col, Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { CarritoCompras } from "../../common/carrito";
import logoChipa from "../../../assets/logoChipa.webp";
import { useEffect, useState } from "react";

const Header = () => {
  return (
    <>
      <Navbar className="header" expand="lg">
        <Container fluid className="contHeader">
          <div>
          </div>
          <div className="logoHeader">
            <Image src={logoChipa} roundedCircle className="imgHeader" />
          </div>
          <div className="carritoHeader">
            <CarritoCompras className="carrito" />
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export { Header };
