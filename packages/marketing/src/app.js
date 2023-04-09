import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Landing from "./pages/landing";
import Pricing from "./pages/pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default function App() {
  return (
    <StylesProvider injectFirst generateClassName={generateClassName}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
}
