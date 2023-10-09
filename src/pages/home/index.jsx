import { Carousel, Col, Image } from "react-bootstrap";
import "./style.scss";
import panUno from "../../assets/pan-uno.jpg";
import panDos from "../../assets/pan-dos.jpg";
import panTres from "../../assets/pan-tres.jpg";
import panes from "../../assets/panes.jpg";
import cincoPanes from "../../assets/cinco-panes.jpg";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Carousel fade>
          <Carousel.Item>
            <Image className="imagenes-home" src={cincoPanes} text="First slide" />
            <Carousel.Caption className="nombre-carousel">
              <div className="caption-content">
                <h1>Cocinando con Bigotes</h1>
                <p>Raíces italianas, Manos Argentinas.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image className="imagenes-home" src={cincoPanes} text="Second slide" />
            <Carousel.Caption className="nombre-carousel">
              <div className="caption-content">
                <h1>Cocinando con Bigotes</h1>
                <p>Raíces italianas, Manos Argentinas.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image className="imagenes-home" src={cincoPanes} text="Third slide" />
            <Carousel.Caption className="nombre-carousel">
              <div className="caption-content">
                <h1>Cocinando con Bigotes</h1>
                <p>Raíces italianas, Manos Argentinas.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <section className="home-content">
          <p>
            En la Panadería Delicioso Pan, nos enorgullece ofrecer una amplia
            selección de panes recién horneados. Desde baguettes crujientes
            hasta dulces bollos, nuestra panadería tiene algo para todos los
            amantes del pan.
          </p>
        </section>
      </div>
    </>
  );
};

export { Home };
