import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import AddProduct from "./components/Admin/AddProduct/AddProduct";
import Cart from "./components/UserSite/Cart/Cart";
import Details from "./components/UserSite/Details/Details";
import Shiping from "./components/UserSite/Shiping/Shiping";
import Information from "./components/UserSite/Information/Information";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Register/Register";
import NavBar from "./components/Shared/NavBar/NavBar";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";

import ManageOrder from "./components/Admin/ManageOrder/ManageOrder";
import Order from "./components/Admin/ManageOrder/Order";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import HomeProduct from "./components/UserSite/HomeProduct/HomeProduct";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import AdminRoute from "./components/Login/AdminRoute/AdminRoute";
import Timer from "./components/Admin/Timer/Timer";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/AddProduct" element={<AddProduct />} />
            <Route path="/product" element={<HomeProduct />} />
            <Route path="/" element={<AdminRoute />}>
              <Route path="/makeadmin" element={<MakeAdmin />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/Shiping" element={<Shiping />} />
            <Route path="/ManageOrder" element={<ManageOrder />} />
            <Route path="/Order/:id" element={<Order />} />

            <Route path="/" element={<PrivateRoute />}>
              <Route path="/Shiping" element={<Shiping />} />
            </Route>
            <Route path="/Information" element={<Information />} />
            <Route path="/Timer" element={<Timer />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

