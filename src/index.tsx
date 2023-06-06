import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./styles/index.less";

// Your Parse initialization configuration goes here
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Parse from "parse/dist/parse.min.js";
import router from "./router";
import { IntlProvider } from "react-intl";
import { CustomProvider } from "rsuite";
import locales from "./locales";
import enGB from "rsuite/locales/en_GB";

const REACT_APP_PARSE_APPLICATION_ID =
  "xN01HjcV6z6uqr8k1K4RIn08WaJ5UT3GrUrXtRb3";
const REACT_APP_PARSE_HOST_URL = "https://parseapi.back4app.com/";
const REACT_APP_PARSE_JAVASCRIPT_KEY =
  "pefuwnCnc58ge4wCwhLX0duMdgVCDm4xeF50tzzO";

console.log("env: ", process?.env);

Parse.initialize(
  REACT_APP_PARSE_APPLICATION_ID,
  REACT_APP_PARSE_JAVASCRIPT_KEY,
);
Parse.serverURL = REACT_APP_PARSE_HOST_URL;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <IntlProvider locale="en" messages={locales.en}>
    <CustomProvider locale={enGB} theme="dark"></CustomProvider>
    <RouterProvider router={router} />
  </IntlProvider>,
  //</React.StrictMode>
);
