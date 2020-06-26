import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/pages/home";


function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Route exact path="/" component={Home} />
      </>
    </Router>
  );

}

export default App;
