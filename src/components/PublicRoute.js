import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../firebase";

function PublicRoute({ children, ...routeProps }) {
  if (auth.currentUser) {
    return <Redirect to="/" />;
  }
  return <Route {...routeProps}>{children}</Route>;
}

export default PublicRoute;
