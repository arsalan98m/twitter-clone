import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login";
import { auth } from "./firebase";
import { Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(true);
      } else {
        setUser(false);
      }
    });
  }, []);
  return (
    <div className="app">
      <Switch>
        <PublicRoute path="/login">
          <Login />
        </PublicRoute>
        <PrivateRoute path="/">
          <Sidebar />
          <Feed />
          <Widgets />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
