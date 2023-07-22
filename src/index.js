import React from "react";
import ReactDom from "react-dom";

import App from "./components/app/App";
import { offerCards } from "./mock-data";

ReactDom.render(
  <App offersCards={offerCards} />,
  document.getElementById(`root`),
);
