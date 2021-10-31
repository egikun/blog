import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Pages
import { Homepage, Header, Footer } from "./pages";

// Styles
import "./styles/App.css"

export default function App() {
  return (
    <Router>
      <div className="body-container">
        <Header />
        <div className="page-container">
          <Switch>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}