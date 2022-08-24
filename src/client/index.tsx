import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "./scss/app.scss";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
