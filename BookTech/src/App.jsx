import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/navbar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Error404 } from "./components/Error404";
import { Cart } from "./components/Cart";
import { CartProvider } from "./contexts/CartContext";
import {ItemDetailContainer} from "./components/ItemDetailContainer"

import "./App.css";


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Welcome To BookTech" />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} greeting="Books" />
        <Route path="/items/:id" element={<ItemDetailContainer />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
