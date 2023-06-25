import type { Component } from "solid-js";
import { Route, Router } from "@solidjs/router";
import Routers from "./router";

const App: Component = () => {
  return (
    <Router>
      <Routers />
    </Router>
  );
};

export default App;
