import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Alert,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import "./Register.css";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const navigate = useNavigate();

  const { user, registerUser, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    // console.log(newLoginData);
    setLoginData(newLoginData);
  };

  const handleLogin = (e) => {
    if (loginData.password !== loginData.confirmpassword) {
      alert("Your Password didn't match");
      return;
    }
    registerUser(loginData.name, loginData.email, loginData.password, navigate);
    e.preventDefault();
  };

  return (
    <Container className="mb-5 pb-3">
      <Grid className="registerContainer" container spacing={1}>
        <Grid className="text-center" item xs={12} md={6}>
          <img
            style={{
              width: "70%",
              borderRadius: "10px",
              marginTop: "50px",
              marginBottom: "10px",
            }}
            src="https://i.ibb.co/7C3Fqh0/Registration.jpg"
            alt=""
          />
        </Grid>
        <Grid
          className="text-center"
          item
          sx={{ mt: 8, width: "65%" }}
          xs={12}
          md={6}
        >
          <Typography variant="h5" gutterBottom>
            New User? Register Here
          </Typography>
          {user?.email && (
            <Alert severity="success">
              Your Registration Created Successfully
            </Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
          <form onSubmit={handleLogin}>
            <TextField
              sx={{ width: "75%", mt: 1, ml: 2 }}
              id="standard-basic"
              label="Name"
              name="name"
              type="text"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", mt: 2, ml: 2 }}
              id="standard-basic"
              label="Email"
              name="email"
              type="email"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", mt: 2, ml: 2 }}
              id="standard-basic"
              label="Password"
              type="password"
              name="password"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", mt: 2, ml: 2 }}
              id="standard-basic"
              label="ReType Your Password"
              type="password"
              name="confirmpassword"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <Button
              sx={{ width: "75%", mt: 3, mb: 1, ml: 2 }}
              type="submit"
              variant="contained"
            >
              Register
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/login">
              <Button sx={{ width: "75%", mt: 2, mb: 1, ml: 2 }} variant="text">
                Already Register? Please Login
              </Button>
            </NavLink>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
