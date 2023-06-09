import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Landing from "./pages/landing";
import Pricing from "./pages/pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default function App({ history }) {
  return (
    <StylesProvider injectFirst generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </Router>
    </StylesProvider>
  );
}
