import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import AddProduct from "./components/Admin/AddProduct/AddProduct";
import Cart from "./components/UserSite/Cart/Cart";
import Details from "./components/UserSite/Details/Details";
import Shiping from "./components/UserSite/Shiping/Shiping";
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

import Footer from "./components/Shared/Footer/Footer";
import NotFound from "./components/Shared/NotFound/NotFound";
import ManageProduct from "./components/Admin/ManageProduct/ManageProduct";
import AirJorden from "./components/UserSite/Catagory/AirJorden";
import AirForce from "./components/UserSite/Catagory/AirForce";
import AirMax from "./components/UserSite/Catagory/AirMax";
import DesignersShoes from "./components/UserSite/Catagory/DesignersShoes";
import Dunk from "./components/UserSite/Catagory/Dunk";
import LadiesBag from "./components/UserSite/Catagory/LadiesBag";
import Others from "./components/UserSite/Catagory/Others";
import Wallet from "./components/UserSite/Catagory/Wallet";
import Watch from "./components/UserSite/Catagory/Watch";
import UltraBoost from "./components/UserSite/Catagory/UltraBoost";
import MyOrder from "./components/UserSite/MyOrder/MyOrder";
import Dashboard from "./components/Dashboard/Dashboard";
import Yeezy350v2 from "./components/UserSite/Catagory/Yeezy350v2";
import Yeezy700 from "./components/UserSite/Catagory/Yeezy700";
import Yeezy500 from "./components/UserSite/Catagory/Yeezy500";
import Delevery from "./components/Admin/Delevery/Delevery";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product" element={<HomeProduct />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/details/:id" element={<Details />} />

            <Route path="/Order/:id" element={<Order />} />

            {/* <Route path="/makeadmin" element={ <MakeAdmin />}/>
            <Route path="/AddProduct" element={<AddProduct />} />
            <Route path="/ManageOrder" element={<ManageOrder />} />
            <Route path="/ManageProduct" element={<ManageProduct />} />
            <Route path="/Delivery" element={<Delevery />} /> */}

            <Route path="product/catagory/AirForce" element={<AirForce />} />
            <Route path="product/catagory/AirJorden" element={<AirJorden />} />
            <Route path="product/catagory/AirMax" element={<AirMax />} />
            <Route path="product/catagory/Dunk" element={<Dunk />} />
            <Route
              path="product/catagory/Designers_Shoes"
              element={<DesignersShoes />}
            />
            <Route path="product/catagory/LadiesBag" element={<LadiesBag />} />
            <Route path="product/catagory/Watch" element={<Watch />} />
            <Route path="product/catagory/Wallet" element={<Wallet />} />
            <Route path="product/catagory/Others" element={<Others />} />
            <Route
              path="product/catagory/Yeezy_350_v2"
              element={<Yeezy350v2 />}
            />
            <Route path="product/catagory/Yeezy500" element={<Yeezy500 />} />
            <Route
              path="product/catagory/UltraBoost"
              element={<UltraBoost />}
            />
            <Route path="product/catagory/Yeezy700" element={<Yeezy700 />} />

            <Route
              path="/information"
              element={
                // <PrivateRoute>
                <Shiping />
                /* </PrivateRoute> */
              }
            />

            <Route path="/MyOrder" element={<MyOrder />} />
            <Route
              path="/dashboard/*"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
