import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/pages/home";
import About from "./components/pages/about"
import Portfolio from "./components/pages/portfolio"


function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </>
    </Router>
  );

}

export default App;
