import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";


const App = () => {
  const user = true;
  return (
    <Router>
        <Routes>
              <Route path="/cart" element={<Cart/>} />
              <Route path="/login" element={ user ? <Navigate to="/" /> : <Login/>} />
              <Route path="/register" element={ user ? <Navigate to="/" /> : <Register/>} />
              <Route path="/products/:category" element={<ProductList/>} />
              <Route path="/products/:id" element={<Product/>} />
              <Route path="/" element={<Home/>} />
        </Routes>
    </Router>
  )
};

export default App;