import { Col, Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { CarritoCompras } from "../../common/carrito";
import logo from "../../../assets/logoChipa.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faEnvelope,
  faHouse,
  faLocationDot,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <Navbar className="footer">
        <Container className="contenedor-footer">
          <div className="datos-completos">
            <Col className="datos atencio alineados">
              <div className="titulos">
                <div className="nombre-titulo">
                  <FontAwesomeIcon className="font" icon={faTruck} />
                  <h1>ENVÍOS Y RETIRO</h1>
                </div>
              </div>
              <div>
                <p>Tu compra estará disponible a partir de mañana</p>
                <p>Lunes a Viernes</p>
              </div>
            </Col>
            <Col className="datos navegacion">
              <div className="titulos">
                <div className="nombre-titulo">
                  <FontAwesomeIcon className="font" icon={faCreditCard} />
                  <h1>MEDIO DE PAGO</h1>
                </div>
              </div>
              <ul>
                <p>Transferencia o efectivo</p>
              </ul>
            </Col>
            <Col className="datos contacto alineados">
              <div className="titulos">
                <div className="nombre-titulo">
                  <FontAwesomeIcon className="font" icon={faHouse} />
                  <h1>CONTACTO</h1>
                </div>
              </div>
              <ul>
                <div className="subtitulos">
                  <FontAwesomeIcon className="font" icon={faLocationDot} />
                  <p>Lomas de Zamora</p>
                </div>
                <div className="subtitulos">
                  <FontAwesomeIcon className="font" icon={faEnvelope} />
                  <p>cocinandoconbigote@gmail.com</p>
                </div>
              </ul>
            </Col>
          </div>
          <div className="datos-navegacion">
            <Col className="imagen">
              <Navbar.Brand className="brand-footer">
                <Image className="imagen-footer" src={logo} roundedCircle />
                <h1>TRADICIÓN 100% ARTESANAL </h1>
              </Navbar.Brand>
            </Col>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export { Footer };
