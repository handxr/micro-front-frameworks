import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/header";
import { MarketingApp } from "./pages/marketing";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default function App() {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst generateClassName={generateClassName}>
        <Header />
        <MarketingApp />
      </StylesProvider>
    </BrowserRouter>
  );
}
