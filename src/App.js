import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { CustomAlertPopUpContextProvider } from "./contexts/AlertPopUpContext";
import LoginPage from "./pages/LoginPage";
import AlertPopUp from "./components/AlertPopUp";

function App() {
  const activeSyle = { fontWeight: "bold", color: "green" };

  return (
    <Router>
      <CustomAlertPopUpContextProvider>
        <nav>
          <NavLink exact to="" activeStyle={activeSyle}>
            HOME
          </NavLink>
          <NavLink
            to="/login"
            activeStyle={activeSyle}
            style={{ marginLeft: "1rem" }}
          >
            LOGIN
          </NavLink>
        </nav>

        <Switch>
          <Route exact path="/">
            <section>
              <h2>HOME</h2>
            </section>
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
        <AlertPopUp />
      </CustomAlertPopUpContextProvider>
    </Router>
  );
}

export default App;
