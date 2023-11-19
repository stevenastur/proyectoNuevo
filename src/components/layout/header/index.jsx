import { Col, Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { CarritoCompras } from "../../common/carrito";
import logoChipa from "../../../assets/logoChipa.webp";
import { useEffect, useState } from "react";

const Header = () => {
    const [navbarTransparent, setNavbarTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
      <Navbar className={`header ${navbarTransparent ? "transparent" : ""}`}  expand="lg">
        <Container fluid className="contHeader">
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
