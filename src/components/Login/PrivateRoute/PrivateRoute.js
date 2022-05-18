import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

export default function PrivateRoute() {
  const { user, isLoading } = useAuth();
  let location = useLocation();
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <>
      {user?.uid ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} />
      )}
      ;
    </>
  );
}
