import { useId } from "react";
import "./style.scss";

const CarritoCompras = () => {
  const carritoId = useId();

  return (
    <>
      <label htmlFor={carritoId} className="cart-button">
        Carrito de Compras
      </label>
      <input id={carritoId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          <li>
            <div>
              <h1>Pan</h1> $199
            </div>
            <footer>
              <h1>Qty: 1</h1>
              <button>+</button>
            </footer>
          </li>
        </ul>
      </aside>
    </>
  );
};

export { CarritoCompras };
