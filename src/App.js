import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Products from "./Products/Products"
import ProductDetails from "./ProductDetails/ProductDetails"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/:productId" element={<ProductDetails/>}/>
          <Route path="/categories" element={<div>Categories</div>}/>
          <Route path="/categories/:categoryName"  element={<div>Category details</div>}/>
          <Route path="/cart" element={<div>Cart</div>}/>
          <Route path="/checkout" element={<div>Checkout</div>}/>
          <Route path="/thanks" element={<div>Thank you</div>}/>
          <Route path="/faq" element={<div>FAQ</div>}/>
          <Route path="/contact" element={<div>Contact</div>}/>
          <Route path="*" element={<div>Not found</div>} /> 
            {/*   "*" means anything else */}
        </Routes>

      </BrowserRouter>

      <footer>Footer</footer>
    </div>
  );
}

export default App;