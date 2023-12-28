import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContainerProducts } from "./pages/container-products";
import { Header } from "./components/layout";
import { Home } from "./pages/home";
import "./App.scss";
import { FiltroProvider } from "./context/filtro";
import { CartProvider } from "./context/carrito";
import { Footer } from "./components/layout/footer";
import { ContainerDetail } from "./pages/container-detail";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0cP2LA5KMBuYGH-8y61aGY3ssqzbeVpk",
  authDomain: "lachipaceriatmp.firebaseapp.com",
  projectId: "lachipaceriatmp",
  storageBucket: "lachipaceriatmp.appspot.com",
  messagingSenderId: "502094820395",
  appId: "1:502094820395:web:70eb159d638176e553266e",
  measurementId: "G-NLZFWB95YV",
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
              <Route path="/" element={<ContainerProducts />} />
              {/* <Route path="/item-detail/:id" element={<ContainerDetail/>}/> */}
            </Routes>
            <Footer />
          </BrowserRouter>
        </FiltroProvider>
      </CartProvider>
    </div>
  );
}

export default App;
