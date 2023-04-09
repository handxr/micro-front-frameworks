import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import Landing from "./pages/landing";
import Pricing from "./pages/pricing";

export default function App() {
  return (
    <StylesProvider injectFirst>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
}
