import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContainerProducts } from "./pages/container-products";
import { Header } from "./components/layout";
import { Home } from "./pages/home";
import "./App.scss";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { CarritoCompras } from "./context/carrito";
import { ContainerDetail } from "./pages/container-detail";
import { FiltroProvider } from "./context/filtro";
import { CartProvider } from "./context/carrito";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbZuIfn8VhpQOJftOwpmLFQs1wodFbE_M",
  authDomain: "cocinandoconbigote-db3ec.firebaseapp.com",
  projectId: "cocinandoconbigote-db3ec",
  storageBucket: "cocinandoconbigote-db3ec.appspot.com",
  messagingSenderId: "21415059001",
  appId: "1:21415059001:web:68aa01a17e360a2ee2f7e8",
  measurementId: "G-HK56NTV59B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App color-fondo">
      <CartProvider>
      <FiltroProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ContainerProducts />} />
            <Route path="/item-detail/:id" element={<ContainerDetail/>}/>
          </Routes>
          <Header />
        </BrowserRouter>
      </FiltroProvider>
      </CartProvider>
    </div>
  );
}

export default App;
