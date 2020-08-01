import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./component/Navigation";
import Detail from "./routes/Detail";

function App() {
  return (
    <HashRouter>
      <div className="header_Container">
        <h1 className="AppName">
          <span>M</span>OVIE <span>W</span>ORLD
        </h1>
      </div>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}
export default App;
