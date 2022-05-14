import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import AddProduct from "./components/Admin/AddProduct/AddProduct";
import Cart from "./components/UserSite/Cart/Cart";
import Details from "./components/UserSite/Details/Details";
import Shiping from "./components/UserSite/Shiping/Shiping";
import Information from "./components/UserSite/Information/Information";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/Shiping" element={<Shiping />} />
          <Route path="/Information" element={<Information />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
<Route path="/cart">
  <Cart />
</Route>