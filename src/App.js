import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Register/Register";
import NavBar from "./components/Shared/NavBar/NavBar";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";

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
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
