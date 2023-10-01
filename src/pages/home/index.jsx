import { Carousel, Image } from "react-bootstrap";
import "./style.scss";
import panDos from "../../assets/pan-dos.jpg";
import panTres from "../../assets/pan-uno.jpg";
import panes from "../../assets/panes.jpg";

const Home = () => {

  return (
    <>
      <div className="home-container">
        <header className="home-header">
          <h1>Bienvenido a la Panadería Delicioso Pan</h1>
        </header>
        <section className="home-content">
          <Carousel fade>
            <Carousel.Item>
              <Image className="imagenes-home" src={panDos} text="First slide" />
              <Carousel.Caption className="nombre-carrusel">
                <h1>Cocinando con Bigotes</h1>
                <p>Raíces italianas,Manos Argentinas.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="imagenes-home" src={panTres} text="Second slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="imagenes-home" src={panes} text="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          {/* <img
            src={panes}
            alt="Variedad de panes frescos"
            className="panes-image"
          /> */}
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
