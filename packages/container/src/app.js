import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/header";
import { Progress } from "./components/progress";

const MarketingLazy = lazy(() => import("./pages/marketing"));
const AuthLazy = lazy(() => import("./pages/auth"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  return (
    <BrowserRouter>
      <StylesProvider injectFirst generateClassName={generateClassName}>
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/">
              <MarketingLazy isSignedIn={isSignedIn} />
            </Route>
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
}
