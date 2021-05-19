import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../firebase";

function PrivateRoute({ children, ...routeProps }) {
  if (auth.currentUser === null) {
    return <Redirect to="/login" />;
  }
  return <Route {...routeProps}>{children}</Route>;
}

export default PrivateRoute;
