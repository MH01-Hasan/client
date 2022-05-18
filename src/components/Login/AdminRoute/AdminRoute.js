import React from "react";
import { Navigate } from "react-router-dom";
import { Route } from "react-router";
// import { CircularProgress } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin } = useAuth();
  //   if (isLoading) {
  //     return <CircularProgress />;
  //   isLoading }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
