// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from './pages/Shop';
import { Navbar } from './components/Navbar';
import { ShopContextProvider } from './context/shop-context';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';

function App() {
  return (
    <div className="App">
      {/* Provider sabse upar rahega */}
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;