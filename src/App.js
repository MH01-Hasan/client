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
// import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import HomeProduct from "./components/UserSite/HomeProduct/HomeProduct";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
// import AdminRoute from "./components/Login/AdminRoute/AdminRoute";
import Timer from "./components/Admin/Timer/Timer";
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
            <Route path="/AddProduct" element={<AddProduct />} />
            <Route path="/product" element={<HomeProduct />} />
            {/* <Route path="/" element={<AdminRoute />}> */}
            <Route
              path="/makeadmin"
              element={
                // <AdminRoute>
                <MakeAdmin />
                // </AdminRoute>
              }
            />
            {/* </Route> */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/Shiping" element={<Shiping />} />
            <Route path="/ManageOrder" element={<ManageOrder />} />
            <Route path="/Order/:id" element={<Order />} />
            <Route path="/ManageProduct" element={<ManageProduct />} />
            <Route path="product/catagory/AirJorden" element={<AirJorden />} />
            <Route path="product/catagory/AirForce" element={<AirForce />} />
            <Route path="product/catagory/AirMax" element={<AirMax />} />

            <Route path="product/catagory/Designers_Shoes" element={<DesignersShoes />} />

            <Route path="product/catagory/Dunk" element={<Dunk />} />

            <Route path="product/catagory/LadiesBag" element={<LadiesBag />} />

            <Route path="product/catagory/Others" element={<Others />} />

            <Route path="product/catagory/Wallet" element={<Wallet />} />

            <Route path="product/catagory/Watch" element={<Watch />} />

            <Route path="product/catagory/UltraBoost" element={<UltraBoost />} />

            {/* <Route path="/" element={<PrivateRoute />}> */}
            <Route
              path="/Shiping"
              element={
                // <PrivateRoute>
                <Shiping />
                // </PrivateRoute>
              }
            />
            {/* </Route> */}
            <Route path="/Information" element={<Information />} />
            <Route path="/Timer" element={<Timer />} />
            <Route path="/MyOrder" element={<MyOrder />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
