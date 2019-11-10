import React from 'react';
import './App.css';

import Home from  "./pages/Home";
import ContactUs from  "./pages/ContactUs";
import AboutUs from  "./pages/AboutUs";
import Product from  "./pages/Product";

import {Route, Switch} from "react-router-dom"

function App() {
  return(
  <> 
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contactus" component={ContactUs} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/product/:slug" component={Product} />
    </Switch>
  </>
  );
}

export default App;
