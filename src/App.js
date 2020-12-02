import "./App.css";
import React, { useContext } from "react";

import { AppContext } from "./AppContext.js";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Portal from "./pages/Portal";
import { AppProvider } from "./AppContext.js";

const App = (props) => {
  const [state] = useContext(AppContext);
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
          <Redirect to="/" />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/portal"} component={Portal} />
          </Switch>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
};

export default App;
