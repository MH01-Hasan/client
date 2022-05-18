import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Alert,
} from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const { user, loginUser, signInWithGoogle, authError } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLogin = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "100%" }}
            src="https://i.ibb.co/7j19CbV/Login.jpg"
            alt=""
          />
        </Grid>
        <Grid className="text-center" item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography sx={{ width: "70%" }} variant="h4" gutterBottom>
            Login Here
          </Typography>
          {user?.email && (
            <Alert severity="success">Successfully Login Your Account</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
          <form onSubmit={handleLogin}>
            <TextField
              sx={{ width: "75%", mt: 1 }}
              id="standard-basic"
              label="Email"
              name="email"
              onChange={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", mt: 2 }}
              id="standard-basic"
              label="Password"
              type="password"
              name="password"
              onChange={handleOnChange}
              variant="standard"
            />
            <Button
              sx={{ width: "75%", mt: 3, mb: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button sx={{ width: "75%" }} variant="text">
                New User? Please Register
              </Button>
            </NavLink>
          </form>
          <p>------------- OR -------------</p>
          <Button
            sx={{ width: "75%", mb: 5 }}
            onClick={handleGoogleSignIn}
            variant="contained"
          >
            Google Sign In
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
